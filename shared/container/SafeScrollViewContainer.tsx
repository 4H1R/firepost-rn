import React from 'react';

import ScrollViewContainer, {
  ScrollViewContainerProps,
} from 'shared/container/ScrollViewContainer';
import SafeAreaView, { SafeAreaViewProps } from 'shared/common/SafeAreaView';

type SafeScrollViewContainerProps = {
  children: React.ReactNode;
  scrollViewProps?: ScrollViewContainerProps;
  safeAreaProps?: SafeAreaViewProps;
};

function SafeScrollViewContainer({
  children,
  safeAreaProps,
  scrollViewProps,
}: SafeScrollViewContainerProps) {
  return (
    <>
      <SafeAreaView {...safeAreaProps} />
      <ScrollViewContainer {...scrollViewProps}>{children}</ScrollViewContainer>
    </>
  );
}

export default SafeScrollViewContainer;
