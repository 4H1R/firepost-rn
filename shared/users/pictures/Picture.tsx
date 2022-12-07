import React from 'react';
import { Image, ViewStyle } from 'react-native';

import Default from 'assets/svg/profile.svg';
import tw from 'libs/tailwind';

export interface PictureProps {
  uri: string | null;
  style?: ViewStyle;
}

function Picture({ uri, style }: PictureProps) {
  const props = { style: tw.style('h-20 w-20 rounded-full', style) };

  return uri ? (
    <Image style={tw.style(props.style, 'skeleton')} source={{ uri }} />
  ) : (
    <Default {...props} />
  );
}

export default Picture;
