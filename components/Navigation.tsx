import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import useAuthUser from 'stores/authStore';
import RegisterScreen from 'screens/auth/RegisterScreen';
import LoginScreen from 'screens/auth/LoginScreen';
import ForgotPassword from 'screens/auth/ForgotPassword';
import HomeScreen from 'screens/HomeScreen';

const Stack = createNativeStackNavigator();

function Navigation() {
  const user = useAuthUser((state) => state.user);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
