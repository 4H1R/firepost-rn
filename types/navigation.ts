import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type TRootStackParamList = {
  Root: NavigatorScreenParams<TRootTabParamList> | undefined;
  Messages: NavigatorScreenParams<TMessagesStackParamList> | undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TRootStackParamList {}
  }
}

export type TRootTabParamList = {
  Home: undefined;
  Posts: NavigatorScreenParams<TPostsStackParamList> | undefined;
  Create: undefined;
  Notifications: undefined;
  Users: NavigatorScreenParams<TUsersStackParamList> | undefined;
};

export type TUsersStackParamList = {
  Show: { username: string };
  Edit: undefined;
};

export type TMessagesStackParamList = {
  Index: undefined;
  Show: { username: string };
};

export type TPostsStackParamList = {
  Index: undefined;
  Saved: undefined;
};

export type TRootStackScreenProps<Screen extends keyof TRootStackParamList> =
  NativeStackScreenProps<TRootStackParamList, Screen>;
