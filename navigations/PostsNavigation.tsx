import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TPostsStackParamList } from 'types';
import IndexScreen from 'screens/posts/IndexScreen';
import SavedScreen from 'screens/posts/SavedScreen';

const Stack = createNativeStackNavigator<TPostsStackParamList>();

function PostsNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Index" component={IndexScreen} />
      <Stack.Screen name="Saved" component={SavedScreen} />
    </Stack.Navigator>
  );
}

export default PostsNavigation;
