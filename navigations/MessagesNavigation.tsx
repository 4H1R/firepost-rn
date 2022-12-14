import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TMessagesStackParamList } from 'types';
import IndexScreen from 'screens/messages/IndexScreen';
import ShowScreen from 'screens/messages/ShowScreen';
import Header from 'components/messages/show/Header';
import headerOptions from 'fixtures/headerOptions';

const Stack = createNativeStackNavigator<TMessagesStackParamList>();

function MessagesNavigation() {
  return (
    <Stack.Navigator initialRouteName="Index" screenOptions={{ headerShown: false }}>
      <Stack.Screen options={{ title: 'Messages' }} name="Index" component={IndexScreen} />
      <Stack.Screen
        options={({ route }) => ({
          ...headerOptions,
          headerTitle: () => <Header user={route.params.user} />,
        })}
        name="Show"
        getId={({ params }) => params.user.id}
        component={ShowScreen}
      />
    </Stack.Navigator>
  );
}

export default MessagesNavigation;
