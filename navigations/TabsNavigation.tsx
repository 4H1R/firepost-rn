import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  HomeIcon,
  PlusCircleIcon,
  BellIcon,
  UserIcon,
  ChatBubbleLeftRightIcon,
  RocketLaunchIcon,
} from 'react-native-heroicons/outline';
import DropDownPicker from 'react-native-dropdown-picker';

import { TRootTabParamList } from 'types';
import tw from 'libs/tailwind';
import HomeScreen from 'screens/HomeScreen';
import UsersNavigation from './UsersNavigation';
import PostsNavigation from './PostsNavigation';

const iconProps = { style: tw`text-primary-600` };

const items = [
  { label: 'Home', value: 'home', icon: () => <HomeIcon {...iconProps} /> },
  { label: 'Explore', value: 'explore', icon: () => <RocketLaunchIcon {...iconProps} /> },
];

const TabStack = createBottomTabNavigator<TRootTabParamList>();

function TabsNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('home');

  return (
    <TabStack.Navigator
      screenOptions={{
        tabBarActiveTintColor: tw.color('primary-600'),
        tabBarInactiveTintColor: tw.color('secondary-400'),
        tabBarShowLabel: false,
      }}
    >
      <TabStack.Screen
        options={{
          tabBarIcon: HomeIcon,
          headerTitle: () => (
            <DropDownPicker
              closeOnBackPressed
              closeAfterSelecting
              hideSelectedItemIcon
              textStyle={tw`font-primary`}
              style={tw.style('border-0', { 'w-26': !isOpen })}
              showArrowIcon
              open={isOpen}
              value={value}
              items={items}
              setOpen={setIsOpen}
              setValue={setValue}
            />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <TabStack.Screen
        options={{ tabBarIcon: ChatBubbleLeftRightIcon }}
        name="Messages"
        component={HomeScreen}
      />
      <TabStack.Screen
        options={{ tabBarIcon: PlusCircleIcon }}
        name="Create"
        component={HomeScreen}
      />
      <TabStack.Screen
        options={{ tabBarIcon: BellIcon }}
        name="Notifications"
        component={HomeScreen}
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
