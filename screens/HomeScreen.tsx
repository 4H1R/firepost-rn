import React from 'react';
import { Button, Text, View } from 'react-native';

import tw from 'libs/tailwind';
import useAuthUser from 'stores/authStore';

function HomeScreen() {
  const clearUser = useAuthUser((state) => state.clearUser);

  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text>Welcome to Home</Text>
      <Button title="Logout" onPress={clearUser} />
    </View>
  );
}

export default HomeScreen;
