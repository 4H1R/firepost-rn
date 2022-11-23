import React from 'react';
import { Text } from 'react-native';

import { splitFirstWordAndRest } from 'utils';
import tw from 'libs/tailwind';

type TitleProps = {
  text: string;
};

function Title({ text }: TitleProps) {
  const [firstWord, rest] = splitFirstWordAndRest(text);
  return (
    <Text style={tw`text-3xl font-primary-bold text-center text-secondary-900`}>
      <Text style={tw`text-primary-600`}>{firstWord}</Text> {rest}
    </Text>
  );
}

export default Title;
