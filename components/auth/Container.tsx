import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import tw from 'libs/tailwind';

type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={tw`px-4 py-2`}>{children}</ScrollView>
    </SafeAreaView>
  );
}

export default Container;
