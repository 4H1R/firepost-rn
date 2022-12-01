import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type TRootStackParamList = {
  Root: NavigatorScreenParams<TRootTabParamList> | undefined;
  Messages: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TRootStackParamList {}
  }
}

export type TRootStackScreenProps<Screen extends keyof TRootStackParamList> =
  NativeStackScreenProps<TRootStackParamList, Screen>;

export type TRootTabParamList = {
  Home: undefined;
  Posts: undefined;
  Create: undefined;
  Notifications: undefined;
  Users: NavigatorScreenParams<TUsersStackParamList> | undefined;
};

export type TUsersStackParamList = {
  Show: { username: string };
  Edit: undefined;
};

export type TUsersStackScreenProps<Screen extends keyof TUsersStackParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<TUsersStackParamList, Screen>,
    NativeStackScreenProps<TRootTabParamList>
  >;
