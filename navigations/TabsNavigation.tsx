import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  HomeIcon,
  PlusCircleIcon,
  UserIcon,
  RocketLaunchIcon,
  ChatBubbleLeftRightIcon,
} from 'react-native-heroicons/outline';

import { TRootTabParamList } from 'types';
import tw from 'libs/tailwind';
import HomeScreen from 'screens/HomeScreen';
import UsersNavigation from './UsersNavigation';
import PostsNavigation from './PostsNavigation';
import PostsCreateScreen from 'screens/posts/CreateScreen';
import MessagesNavigation from './MessagesNavigation';

const TabStack = createBottomTabNavigator<TRootTabParamList>();

function TabsNavigation() {
  return (
    <TabStack.Navigator
      screenOptions={{
        tabBarStyle: tw`bg-secondary-100`,
        tabBarActiveTintColor: tw.color('primary-600'),
        tabBarInactiveTintColor: tw.color('secondary-400'),
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <TabStack.Screen options={{ tabBarIcon: HomeIcon }} name="Home" component={HomeScreen} />
      <TabStack.Screen
        options={{ tabBarIcon: RocketLaunchIcon }}
        name="Posts"
        component={PostsNavigation}
      />
      <TabStack.Screen
        options={{ tabBarIcon: PlusCircleIcon }}
        name="Create"
        component={PostsCreateScreen}
      />
      <TabStack.Screen
        options={{ tabBarIcon: ChatBubbleLeftRightIcon }}
        name="Messages"
        component={MessagesNavigation}
      />
      <TabStack.Screen
        options={{ tabBarIcon: UserIcon }}
        name="Users"
        component={UsersNavigation}
      />
    </TabStack.Navigator>
  );
}

export default TabsNavigation;
