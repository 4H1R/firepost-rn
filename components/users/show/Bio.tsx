import React, { useState } from 'react';
import { Text, TouchableWithoutFeedback } from 'react-native';

import tw from 'libs/tailwind';

type BioProps = {
  bio: string | null;
};

const maxLength = 150;

function Bio({ bio }: BioProps) {
  const [isShort, setIsShort] = useState(true);
  if (!bio) return null;

  const isBig = bio.length > maxLength;
  const bioTransformed = isShort ? bio.slice(0, maxLength) : bio;
  const handleToggleShort = () => isBig && setIsShort((prev) => !prev);

  return (
    <TouchableWithoutFeedback onPress={handleToggleShort}>
      <Text style={tw`font-primary-medium text-base text-secondary-900 mt-2`}>
        {bioTransformed} {isBig && isShort && '...'}
      </Text>
    </TouchableWithoutFeedback>
  );
}

export default Bio;
