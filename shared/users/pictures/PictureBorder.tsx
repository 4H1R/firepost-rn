import React from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';

import tw from 'libs/tailwind';

interface PictureBorderProps extends ViewProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

function PictureBorder({ children, style, ...props }: PictureBorderProps) {
  return (
    <View {...props} style={tw.style('border-2 border-secondary-400 rounded-full p-0.5', style)}>
      {children}
    </View>
  );
}

export default PictureBorder;
