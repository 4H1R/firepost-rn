import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TUsersStackParamList } from 'types';
import ProfileScreen from 'screens/users/ProfileScreen';
import useAuthUser from 'stores/authStore';

const UserStack = createNativeStackNavigator<TUsersStackParamList>();

function UsersNavigation() {
  const username = useAuthUser((state) => state.user!.username);

  return (
    <UserStack.Navigator>
      <UserStack.Screen initialParams={{ username }} name="Profile" component={ProfileScreen} />
      <UserStack.Screen name="Show" component={ProfileScreen} />
    </UserStack.Navigator>
  );
}

export default UsersNavigation;
