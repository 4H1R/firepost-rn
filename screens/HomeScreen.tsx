import React from 'react';
import { Text } from 'react-native';

import tw from 'libs/tailwind';
import Container from 'shared/common/Container';

function HomeScreen() {
  return (
    <Container contentContainerStyle={tw`flex-1 items-center justify-center`}>
      <Text style={tw`font-primary`}>Welcome to Home</Text>
    </Container>
  );
}

export default HomeScreen;
