import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { useTranslation } from 'react-i18next';

import './libs/i18n';
import RegisterScreen from 'screens/RegisterScreen';
import LoginScreen from 'screens/LoginScreen';
import ForgotPassword from 'screens/ForgotPassword';

const Stack = createNativeStackNavigator();

const persianFonts = {
  'Primary-Bold': require('./assets/fonts/Vazir-Bold.ttf'),
  'Primary-Semi': require('./assets/fonts/Vazir-Medium.ttf'),
  'Primary-Regular': require('./assets/fonts/Vazir.ttf'),
};

const englishFonts = {
  'Primary-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
  'Primary-Semi': require('./assets/fonts/Poppins-SemiBold.ttf'),
  'Primary-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
};

export default function App() {
  const { i18n } = useTranslation();
  const [fontsLoaded] = useFonts(
    i18n.language === 'fa' ? persianFonts : englishFonts
  );

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
