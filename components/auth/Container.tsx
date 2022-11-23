import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import MainContainer from 'shared/common/Container';
import tw from 'libs/tailwind';

type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return (
    <SafeAreaView style={tw`bg-color`}>
      <MainContainer>{children}</MainContainer>
    </SafeAreaView>
  );
}

export default Container;
