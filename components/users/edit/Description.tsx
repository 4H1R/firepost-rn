import React from 'react';
import { Text } from 'react-native';

import tw from 'libs/tailwind';

type DescriptionProps = {
  description: string;
};

function Description({ description }: DescriptionProps) {
  return <Text style={tw`mt-2 font-primary text-xs text-secondary-500`}>{description}</Text>;
}

export default Description;
