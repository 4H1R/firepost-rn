import React from 'react';
import { Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import tw from 'libs/tailwind';
import useAuthUser from 'stores/authStore';
import Container from 'shared/common/Container';

function HomeScreen() {
  const clearUser = useAuthUser((state) => state.clearUser);
  const navigation = useNavigation();
  const handleNavigate = () =>
    navigation.navigate('Root', {
      screen: 'Profile',
    });

  return (
    <Container contentContainerStyle={tw`flex-1 items-center justify-center`}>
      <Text style={tw`font-primary`}>Welcome to Home</Text>
      <Button title="Logout" onPress={clearUser} />
      <Button title="Navigate to Profile" onPress={handleNavigate} />
    </Container>
  );
}

export default HomeScreen;
