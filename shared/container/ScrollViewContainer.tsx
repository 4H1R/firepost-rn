import React from 'react';
import { ScrollViewProps, ViewStyle } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import tw from 'libs/tailwind';

export interface ScrollViewContainerProps extends ScrollViewProps {
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
}

function ScrollViewContainer({
  children,
  style,
  contentContainerStyle,
  ...props
}: ScrollViewContainerProps) {
  return (
    <ScrollView
      {...props}
      style={tw.style('bg-color', style)}
      contentContainerStyle={tw.style('container py-2', contentContainerStyle)}
    >
      {children}
    </ScrollView>
  );
}

export default ScrollViewContainer;
