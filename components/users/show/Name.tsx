import React from 'react';
import { Text, TextStyle } from 'react-native';

import tw from 'libs/tailwind';

type NameProps = {
  name: string;
  style?: TextStyle;
};

function Name({ name, style }: NameProps) {
  return (
    <Text style={tw.style('font-primary-medium text-base text-secondary-400 mt-1', style)}>
      {name}
    </Text>
  );
}

export default Name;
