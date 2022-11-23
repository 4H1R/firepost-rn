import React from 'react';
import { Button, Text } from 'react-native';

import tw from 'libs/tailwind';
import useAuthUser from 'stores/authStore';
import Container from 'shared/common/Container';

function HomeScreen() {
  const clearUser = useAuthUser((state) => state.clearUser);

  return (
    <Container contentContainerStyle={tw`flex-1 items-center justify-center`}>
      <Text style={tw`font-primary`}>Welcome to Home</Text>
      <Button title="Logout" onPress={clearUser} />
    </Container>
  );
}

export default HomeScreen;
