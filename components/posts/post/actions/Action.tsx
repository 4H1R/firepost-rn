import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

import tw from 'libs/tailwind';

interface ActionProps extends TouchableOpacityProps {
  Icon: React.FC<SvgProps & { size: number }>;
  count?: number;
  iconStyle?: ViewStyle;
  isLoading?: boolean;
  addMargin?: boolean;
  onTextPress?: () => void;
}

function Action({
  Icon,
  iconStyle,
  count = 0,
  isLoading = false,
  addMargin = false,
  onTextPress,
  ...props
}: ActionProps) {
  return (
    <View
      style={tw.style('flex-row items-center justify-center', {
        'mr-4': addMargin,
      })}
    >
      <TouchableOpacity
        {...props}
        disabled={isLoading}
        style={tw.style({ 'opacity-50': isLoading })}
      >
        <Icon size={25} style={tw.style('w-6 h-6 text-secondary-900', iconStyle)} />
      </TouchableOpacity>
      {count > 0 && (
        <TouchableOpacity onPress={onTextPress}>
          <Text style={tw`font-primary text-base text-secondary-900 pl-2`}>{count}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default Action;
