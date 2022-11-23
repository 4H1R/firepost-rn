import React from 'react';
import { ScrollViewProps, ViewStyle } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import tw from 'libs/tailwind';

interface ContainerProps extends ScrollViewProps {
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
}

function Container({ children, style, contentContainerStyle }: ContainerProps) {
  return (
    <ScrollView
      style={tw.style('bg-color', style)}
      contentContainerStyle={tw.style('px-4 py-2', contentContainerStyle)}
    >
      {children}
    </ScrollView>
  );
}

export default Container;
