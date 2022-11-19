import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { QueryClientProvider } from '@tanstack/react-query';

import './libs/i18n';
import Navigation from 'components/Navigation';
import ResourceLoader from 'components/ResourceLoader';
import queryClient from 'libs/queryClient';
import IntroSlides from 'components/introSlides';
import Auth from 'components/Auth';

export default function App() {
  return (
    <ResourceLoader>
      <QueryClientProvider client={queryClient}>
        <StatusBar style="auto" />
        <IntroSlides>
          <Auth>
            <Navigation />
          </Auth>
        </IntroSlides>
      </QueryClientProvider>
    </ResourceLoader>
  );
}
