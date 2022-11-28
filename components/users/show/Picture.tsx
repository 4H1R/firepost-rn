import React from 'react';
import { Image } from 'react-native';

import Default from 'assets/svg/profile.svg';
import tw from 'libs/tailwind';

type PictureProps = {
  uri: string | null;
};

function Picture({ uri }: PictureProps) {
  const props = { style: tw`h-20 w-20 border-2 border-secondary-400 rounded-full` };

  return uri ? <Image {...props} source={{ uri }} /> : <Default {...props} />;
}

export default Picture;
