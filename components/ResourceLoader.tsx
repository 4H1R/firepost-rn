import React, { useCallback, useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

import tw from 'libs/tailwind';
import useIntroSlider from 'stores/introSliderStore';

SplashScreen.preventAutoHideAsync().catch();

export const INTRO_SLIDER_KEY = '@showIntroSlides';

type ResourceLoaderProps = {
  children: React.ReactNode;
};

function ResourceLoader({ children }: ResourceLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const showIntroSlider = useIntroSlider((state) => state.showIntroSlider);

  const [fontsLoaded] = useFonts({
    'Primary-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Primary-Semi': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Primary-Medium': require('../assets/fonts/Poppins-Regular.ttf'),
    'Primary-Regular': require('../assets/fonts/Poppins-Medium.ttf'),
  });

  const checkIntroSlides = async () => {
    try {
      const result = await AsyncStorage.getItem(INTRO_SLIDER_KEY);
      if (!result) showIntroSlider();
    } catch {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkIntroSlides();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (!fontsLoaded || isLoading) return;
    await SplashScreen.hideAsync();
  }, [fontsLoaded, isLoading]);

  if (!fontsLoaded) return null;

  return (
    <View style={tw`flex-1 bg-secondary-50`} onLayout={onLayoutRootView}>
      {children}
    </View>
  );
}

export default ResourceLoader;
