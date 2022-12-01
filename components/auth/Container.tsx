import React from 'react';

import MainContainer from 'shared/common/Container';
import tw from 'libs/tailwind';
import SafeAreaView from 'shared/common/SafeAreaView';

type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return (
    <SafeAreaView>
      <MainContainer>{children}</MainContainer>
    </SafeAreaView>
  );
}

export default Container;
