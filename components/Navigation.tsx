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
  ChevronLeftIcon,
} from 'react-native-heroicons/outline';
import { TouchableOpacity } from 'react-native';

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
        options={{
          tabBarIcon: UserIcon,
          headerLeft: () => (
            <TouchableOpacity>
              <ChevronLeftIcon style={tw`w-5 h-5 text-secondary-900`} />
            </TouchableOpacity>
          ),
        }}
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
          <Stack.Screen name="Root" component={MyTabs} />
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
