import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';

import { splitFirstWordAndRest } from 'utils';
import tw from 'libs/tailwind';

interface TitleProps extends TextProps {
  text: string;
  style?: TextStyle;
}

function Title({ text, style }: TitleProps) {
  const [firstWord, rest] = splitFirstWordAndRest(text);
  return (
    <Text style={tw.style('text-3xl font-primary-bold text-center text-secondary-900', style)}>
      <Text style={tw`text-primary-600`}>{firstWord}</Text> {rest}
    </Text>
  );
}

export default Title;
