import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PostsScreen from 'screens/posts/PostsScreen';

const PostStack = createNativeStackNavigator();

function PostsNavigation() {
  return (
    <PostStack.Navigator>
      <PostStack.Screen name="Index" component={PostsScreen} />
    </PostStack.Navigator>
  );
}

export default PostsNavigation;
