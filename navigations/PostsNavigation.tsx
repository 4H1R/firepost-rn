import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput } from 'react-native';

import IndexScreen from 'screens/posts/IndexScreen';

const Stack = createNativeStackNavigator();

function PostsNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Index" component={IndexScreen} />
    </Stack.Navigator>
  );
}

export default PostsNavigation;
