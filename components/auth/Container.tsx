import React from 'react';
import { ScrollView } from 'react-native';

import tw from 'libs/tailwind';
import { SafeAreaView } from 'react-native-safe-area-context';

type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={tw`p-4`}>{children}</ScrollView>
    </SafeAreaView>
  );
}

export default Container;
