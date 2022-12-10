import React from 'react';
import {
  SafeAreaView as MainSafeAreaView,
  SafeAreaViewProps as SafeAreaViewPropsMain,
} from 'react-native-safe-area-context';

import tw from 'libs/tailwind';

export interface SafeAreaViewProps extends SafeAreaViewPropsMain {
  children: React.ReactNode;
}

function SafeAreaView({ children, ...props }: SafeAreaViewProps) {
  return (
    <MainSafeAreaView {...props} style={tw`bg-color`}>
      {children}
    </MainSafeAreaView>
  );
}

export default SafeAreaView;
