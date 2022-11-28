import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  HomeIcon,
  PlusCircleIcon,
  BellIcon,
  UserIcon,
  ChatBubbleLeftRightIcon,
} from 'react-native-heroicons/outline';

import { TRootTabParamList } from 'types';
import tw from 'libs/tailwind';
import HomeScreen from 'screens/HomeScreen';
import UsersNavigation from './UsersNavigation';
import PostsNavigation from './PostsNavigation';

const TabStack = createBottomTabNavigator<TRootTabParamList>();

function TabsNavigation() {
  return (
    <TabStack.Navigator
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
      <TabStack.Screen options={{ tabBarIcon: HomeIcon }} name="Home" component={HomeScreen} />
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
        options={{ tabBarIcon: UserIcon }}
        name="Users"
        component={UsersNavigation}
      />
    </TabStack.Navigator>
  );
}

export default TabsNavigation;
