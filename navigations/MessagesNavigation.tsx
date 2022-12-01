import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IndexScreen from 'screens/messages/IndexScreen';
import HeaderTitle from 'shared/common/HeaderTitle';

const Stack = createNativeStackNavigator();

function MessagesNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{ headerTitle: ({ children }) => <HeaderTitle title={children} /> }}
    >
      <Stack.Screen options={{ title: 'Messages' }} name="Index" component={IndexScreen} />
    </Stack.Navigator>
  );
}

export default MessagesNavigation;
