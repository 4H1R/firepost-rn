import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TUsersStackParamList } from 'types';
import ShowScreen from 'screens/users/ShowScreen';
import useAuthUser from 'stores/authStore';
import EditScreen from 'screens/users/EditScreen';
import Title from 'shared/common/Title';
import tw from 'libs/tailwind';
import headerOptions from 'fixtures/headerOptions';

const Stack = createNativeStackNavigator<TUsersStackParamList>();

function UsersNavigation() {
  const username = useAuthUser((state) => state.user!.username);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        getId={({ params }) => params.username}
        initialParams={{ username }}
        name="Show"
        component={ShowScreen}
      />
      <Stack.Screen
        options={{
          ...headerOptions,
          presentation: 'modal',
          headerTitle: () => <Title text="Edit your Profile" style={tw`text-2xl`} />,
        }}
        name="Edit"
        component={EditScreen}
      />
    </Stack.Navigator>
  );
}

export default UsersNavigation;
