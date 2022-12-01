import React from 'react';
import { SafeAreaView as MainSafeAreaView } from 'react-native-safe-area-context';

import tw from 'libs/tailwind';

type SafeAreaViewProps = {
  children: React.ReactNode;
};

function SafeAreaView({ children }: SafeAreaViewProps) {
  return <MainSafeAreaView style={tw`bg-color`}>{children}</MainSafeAreaView>;
}

export default SafeAreaView;
