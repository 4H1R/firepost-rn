import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SvgProps } from 'react-native-svg';

import tw from 'libs/tailwind';

type TColor = 'primary' | 'secondary' | 'secondary-outline' | 'danger';

type ActionProps = {
  color: TColor;
  title: string;
  Icon: React.FC<SvgProps>;
  onPress?: () => void;
  isLoading?: boolean;
};

function Action({ Icon, color, title, onPress, isLoading = false }: ActionProps) {
  const { bg, text } = {
    primary: { bg: 'bg-primary-600', text: 'text-secondary-50' },
    secondary: { bg: 'bg-secondary-500', text: 'text-secondary-50' },
    'secondary-outline': { bg: 'border border-secondary-600', text: 'text-secondary-900' },
    danger: { bg: 'bg-danger-600', text: 'text-secondary-50' },
  }[color];

  return (
    <TouchableOpacity
      disabled={isLoading}
      onPress={onPress}
      style={tw.style('flex-row items-center justify-center rounded-xl py-2 px-3 mr-4', bg, {
        'opacity-50': isLoading,
      })}
    >
      <Text style={tw.style('font-primary-medium text-sm mr-2', text)}>{title}</Text>
      <Icon style={tw.style('w-3 h-3', text)} />
    </TouchableOpacity>
  );
}

export default Action;
