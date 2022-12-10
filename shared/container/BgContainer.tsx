import React from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';

import tw from 'libs/tailwind';

interface BgContainerProps extends ViewProps {
  children: React.ReactNode;
  style?: ViewStyle;
  takeFullScreen?: boolean;
}

function BgContainer({ children, style, takeFullScreen = true }: BgContainerProps) {
  return <View style={tw.style('bg-color', { 'flex-1': takeFullScreen }, style)}>{children}</View>;
}

export default BgContainer;
