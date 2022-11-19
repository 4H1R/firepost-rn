import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type TRootStackParamList = {
  Root: NavigatorScreenParams<TRootTabParamList> | undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TRootStackParamList {}
  }
}

export type RootStackScreenProps<Screen extends keyof TRootStackParamList> = NativeStackScreenProps<
  TRootStackParamList,
  Screen
>;

export type TRootTabParamList = {
  Home: undefined;
  Messages: undefined;
  Create: undefined;
  Notifications: undefined;
  Profile: { username: string };
};

export type RootTabScreenProps<Screen extends keyof TRootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<TRootTabParamList, Screen>,
  NativeStackScreenProps<TRootStackParamList>
>;
