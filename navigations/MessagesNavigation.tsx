import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TMessagesStackParamList } from 'types';
import IndexScreen from 'screens/messages/IndexScreen';
import ShowScreen from 'screens/messages/ShowScreen';
import HeaderTitle from 'shared/common/HeaderTitle';

const Stack = createNativeStackNavigator<TMessagesStackParamList>();

function MessagesNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{ headerTitle: ({ children }) => <HeaderTitle title={children} /> }}
    >
      <Stack.Screen options={{ title: 'Messages' }} name="Index" component={IndexScreen} />
      <Stack.Screen options={{ title: 'Show' }} name="Show" component={ShowScreen} />
    </Stack.Navigator>
  );
}

export default MessagesNavigation;
