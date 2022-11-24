import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  PlusCircleIcon,
  BellIcon,
  UserIcon,
} from 'react-native-heroicons/outline';

import { TRootStackParamList, TRootTabParamList } from 'types';
import useAuthUser from 'stores/authStore';
import RegisterScreen from 'screens/auth/RegisterScreen';
import LoginScreen from 'screens/auth/LoginScreen';
import ForgotPassword from 'screens/auth/ForgotPassword';
import HomeScreen from 'screens/HomeScreen';
import UserProfile from 'screens/users/ProfileScreen';
import tw from 'libs/tailwind';

const Stack = createNativeStackNavigator<TRootStackParamList>();
const Tab = createBottomTabNavigator<TRootTabParamList>();

function MyTabs() {
  const username = useAuthUser((state) => state.user!.username);
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: '',
        headerLeftContainerStyle: tw`mx-4`,
        headerRightContainerStyle: tw`mx-4`,
        tabBarActiveTintColor: tw.color('primary-600'),
        tabBarInactiveTintColor: tw.color('secondary-400'),
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen options={{ tabBarIcon: HomeIcon }} name="Home" component={HomeScreen} />
      <Tab.Screen
        options={{ tabBarIcon: ChatBubbleLeftEllipsisIcon }}
        name="Messages"
        component={HomeScreen}
      />
      <Tab.Screen options={{ tabBarIcon: PlusCircleIcon }} name="Create" component={HomeScreen} />
      <Tab.Screen options={{ tabBarIcon: BellIcon }} name="Notifications" component={HomeScreen} />
      <Tab.Screen
        initialParams={{ username }}
        options={{ tabBarIcon: UserIcon }}
        name="Profile"
        component={UserProfile}
      />
    </Tab.Navigator>
  );
}

function Navigation() {
  const user = useAuthUser((state) => state.user);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Group>
            <Stack.Screen name="Root" component={MyTabs} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
