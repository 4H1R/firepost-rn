import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SvgProps } from 'react-native-svg';

import tw from 'libs/tailwind';

type TColor = 'primary' | 'secondary-outline' | 'danger';

type ActionProps = {
  color: TColor;
  title: string;
  Icon: React.FC<SvgProps>;
};
function Action({ Icon, color, title }: ActionProps) {
  const { bg, text } = {
    primary: { bg: 'bg-primary-600', text: 'text-secondary-50' },
    'secondary-outline': { bg: 'border border-secondary-600', text: 'text-secondary-900' },
    danger: { bg: 'bg-danger-600', text: 'text-secondary-50' },
  }[color];

  return (
    <TouchableOpacity
      style={tw.style('flex-row items-center justify-center rounded-xl py-2 px-3 mr-4', bg)}
    >
      <Text style={tw.style('font-primary-medium text-sm mr-2', text)}>{title}</Text>
      <Icon style={tw.style('w-3 h-3', text)} />
    </TouchableOpacity>
  );
}

export default Action;
