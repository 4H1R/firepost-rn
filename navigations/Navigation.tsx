import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TRootStackParamList } from 'types';
import useAuthUser from 'stores/authStore';
import RegisterScreen from 'screens/auth/RegisterScreen';
import LoginScreen from 'screens/auth/LoginScreen';
import ForgotPassword from 'screens/auth/ForgotPassword';
import TabsNavigation from './TabsNavigation';
import MessagesNavigation from './MessagesNavigation';

const Stack = createNativeStackNavigator<TRootStackParamList>();

function Navigation() {
  const user = useAuthUser((state) => state.user);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Group>
            <Stack.Screen name="Root" component={TabsNavigation} />
            <Stack.Screen name="Messages" component={MessagesNavigation} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
