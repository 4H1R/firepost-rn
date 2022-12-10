import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

import tw from 'libs/tailwind';

interface ActionProps extends TouchableOpacityProps {
  Icon: React.FC<SvgProps & { size: number }>;
  iconStyle?: ViewStyle;
  isLoading?: boolean;
}

function Action({ Icon, isLoading = false, iconStyle, ...props }: ActionProps) {
  return (
    <TouchableOpacity {...props} disabled={isLoading} style={tw.style({ 'opacity-50': isLoading })}>
      <Icon size={25} style={tw.style('w-6 h-6', iconStyle)} />
    </TouchableOpacity>
  );
}

export default Action;
