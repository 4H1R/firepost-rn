import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  PlusCircleIcon,
  BellIcon,
  UserIcon,
} from 'react-native-heroicons/outline';

import { TRootTabParamList } from 'types';
import tw from 'libs/tailwind';
import HomeScreen from 'screens/HomeScreen';
import UsersNavigation from './UsersNavigation';

const Tab = createBottomTabNavigator<TRootTabParamList>();

function TabsNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
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
      <Tab.Screen options={{ tabBarIcon: UserIcon }} name="Users" component={UsersNavigation} />
    </Tab.Navigator>
  );
}

export default TabsNavigation;
