import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TPostsStackParamList } from 'types';
import IndexScreen from 'screens/posts/IndexScreen';
import SavedScreen from 'screens/posts/SavedScreen';
import ShowScreen from 'screens/posts/ShowScreen';
import Title from 'shared/common/Title';
import tw from 'libs/tailwind';
import headerOptions from 'fixtures/headerOptions';

const Stack = createNativeStackNavigator<TPostsStackParamList>();

function PostsNavigation() {
  return (
    <Stack.Navigator initialRouteName="Index" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Index" component={IndexScreen} />
      <Stack.Screen
        options={{
          ...headerOptions,
          headerTitle: () => <Title style={tw`text-2xl`} text="Saved Posts" />,
        }}
        name="Saved"
        component={SavedScreen}
      />
      <Stack.Screen getId={({ params }) => params.id} name="Show" component={ShowScreen} />
    </Stack.Navigator>
  );
}

export default PostsNavigation;
