import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { QueryClientProvider } from '@tanstack/react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useDeviceContext } from 'twrnc';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

import './libs/i18n';
import Navigation from './navigations';
import ResourceLoader from 'components/ResourceLoader';
import queryClient from 'libs/queryClient';
import IntroSlides from 'components/introSlides';
import Auth from 'components/Auth';
import tw from 'libs/tailwind';
import toastConfig from 'libs/toast';

export default function App() {
  useDeviceContext(tw);

  return (
    <GestureHandlerRootView style={tw`flex-1`}>
      <SafeAreaProvider>
        <ResourceLoader>
          <QueryClientProvider client={queryClient}>
            <IntroSlides>
              <Auth>
                <Navigation />
              </Auth>
            </IntroSlides>
          </QueryClientProvider>
        </ResourceLoader>
        <StatusBar style="auto" />
        <Toast config={toastConfig} />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
