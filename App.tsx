import { StatusBar } from 'expo-status-bar';
import { QueryClientProvider } from '@tanstack/react-query';

import './libs/i18n';
import Navigation from 'components/Navigation';
import SplashScreen from 'components/SplashScreen';
import queryClient from 'libs/queryClient';

export default function App() {
  return (
    <SplashScreen>
      <QueryClientProvider client={queryClient}>
        <StatusBar style="auto" />
        <Navigation />
      </QueryClientProvider>
    </SplashScreen>
  );
}
