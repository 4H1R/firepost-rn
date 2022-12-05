import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TUsersStackParamList } from 'types';
import ShowScreen from 'screens/users/ShowScreen';
import useAuthUser from 'stores/authStore';
import EditScreen from 'screens/users/EditScreen';
import HeaderTitle from 'shared/common/HeaderTitle';

const Stack = createNativeStackNavigator<TUsersStackParamList>();

function UsersNavigation() {
  const username = useAuthUser((state) => state.user!.username);

  return (
    <Stack.Navigator
      screenOptions={{ headerTitle: ({ children }) => <HeaderTitle title={children} /> }}
    >
      <Stack.Screen
        getId={({ params }) => params.username}
        initialParams={{ username }}
        name="Show"
        component={ShowScreen}
      />
      <Stack.Screen name="Edit" component={EditScreen} />
    </Stack.Navigator>
  );
}

export default UsersNavigation;
