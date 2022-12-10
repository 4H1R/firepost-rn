import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TPostsStackParamList } from 'types';
import IndexScreen from 'screens/posts/IndexScreen';
import SavedScreen from 'screens/posts/SavedScreen';
import ShowScreen from 'screens/posts/ShowScreen';

const Stack = createNativeStackNavigator<TPostsStackParamList>();

function PostsNavigation() {
  return (
    <Stack.Navigator initialRouteName="Index" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Index" component={IndexScreen} />
      <Stack.Screen name="Saved" component={SavedScreen} />
      <Stack.Screen getId={({ params }) => params.id} name="Show" component={ShowScreen} />
    </Stack.Navigator>
  );
}

export default PostsNavigation;
