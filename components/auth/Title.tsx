import React from 'react';
import { Text } from 'react-native';

import tw from 'libs/tailwind';

type TitleProps = {
  children: string;
};

function Title({ children }: TitleProps) {
  return (
    <Text style={tw`text-3xl text-secondary-700 font-primary-bold text-center`}>
      {children}
    </Text>
  );
}

export default Title;
