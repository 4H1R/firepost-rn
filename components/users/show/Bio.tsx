import React from 'react';
import { Text } from 'react-native';

import tw from 'libs/tailwind';

type BioProps = {
  bio: string | null;
};

function Bio({ bio }: BioProps) {
  if (!bio) return null;

  return <Text style={tw`font-primary-medium text-base text-secondary-900 mt-2`}>{bio}</Text>;
}

export default Bio;
