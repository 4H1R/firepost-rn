import React, { useCallback } from 'react';
import { useFonts } from 'expo-font';
import { View } from 'react-native';
import * as SplashScreenExpo from 'expo-splash-screen';

import tw from 'libs/tailwind';

type SplashScreenProps = {
  children: React.ReactNode;
};

function SplashScreen({ children }: SplashScreenProps) {
  const [fontsLoaded] = useFonts({
    'Primary-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Primary-Semi': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Primary-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreenExpo.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View style={tw`flex-1`} onLayout={onLayoutRootView}>
      {children}
    </View>
  );
}

export default SplashScreen;
