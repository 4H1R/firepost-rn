import React, { useCallback, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SplashScreen from 'expo-splash-screen';

import tw from 'libs/tailwind';
import useIntroSlider from 'stores/introSliderStore';

SplashScreen.preventAutoHideAsync().catch();

export const INTRO_SLIDER_KEY = '@showIntroSlides';

type ResourceLoaderProps = {
  children: React.ReactNode;
};

function ResourceLoader({ children }: ResourceLoaderProps) {
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
    } catch {}
  };

  useEffect(() => {
    checkIntroSlides();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  if (!fontsLoaded) return null;

  return (
    <View style={tw`flex-1`} onLayout={onLayoutRootView}>
      {children}
    </View>
  );
}

export default ResourceLoader;
