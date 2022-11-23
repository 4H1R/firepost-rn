import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { QueryClientProvider } from '@tanstack/react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import './libs/i18n';
import Navigation from 'components/Navigation';
import ResourceLoader from 'components/ResourceLoader';
import queryClient from 'libs/queryClient';
import IntroSlides from 'components/introSlides';
import Auth from 'components/Auth';
import tw from 'libs/tailwind';

export default function App() {
  return (
    <GestureHandlerRootView style={tw`flex-1`}>
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
    </GestureHandlerRootView>
  );
}
