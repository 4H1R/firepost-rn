import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native';
import {
  HomeIcon,
  PlusCircleIcon,
  BellIcon,
  UserIcon,
  RocketLaunchIcon,
  ChatBubbleLeftRightIcon,
} from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

import { TRootTabParamList } from 'types';
import tw from 'libs/tailwind';
import HomeScreen from 'screens/HomeScreen';
import UsersNavigation from './UsersNavigation';
import PostsNavigation from './PostsNavigation';
import PostsCreateScreen from 'screens/posts/CreateScreen';
import NotificationsScreen from 'screens/NotificationsScreen';
import HeaderTitle from 'shared/common/HeaderTitle';

const TabStack = createBottomTabNavigator<TRootTabParamList>();

function TabsNavigation() {
  const navigation = useNavigation();
  return (
    <TabStack.Navigator
      screenOptions={{
        headerStyle: tw`border-b border-secondary-300/50 bg-secondary-100`,
        tabBarStyle: tw`bg-secondary-100`,
        tabBarActiveTintColor: tw.color('primary-600'),
        tabBarInactiveTintColor: tw.color('secondary-400'),
        tabBarShowLabel: false,
        headerTitle: ({ children }) => <HeaderTitle title={children} />,
      }}
    >
      <TabStack.Screen
        options={{
          tabBarIcon: HomeIcon,
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
              <ChatBubbleLeftRightIcon style={tw`h-8 w-8 text-secondary-900 mx-4`} />
            </TouchableOpacity>
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <TabStack.Screen
        options={{ tabBarIcon: RocketLaunchIcon, headerShown: false }}
        name="Posts"
        component={PostsNavigation}
      />
      <TabStack.Screen
        options={{ tabBarIcon: PlusCircleIcon }}
        name="Create"
        component={PostsCreateScreen}
      />
      <TabStack.Screen
        options={{ tabBarIcon: BellIcon }}
        name="Notifications"
        component={NotificationsScreen}
      />
      <TabStack.Screen
        options={{ tabBarIcon: UserIcon, headerShown: false }}
        name="Users"
        component={UsersNavigation}
      />
    </TabStack.Navigator>
  );
}

export default TabsNavigation;
