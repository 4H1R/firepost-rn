import React from 'react';
import { Image, View, ViewStyle } from 'react-native';

import Default from 'assets/svg/profile.svg';
import tw from 'libs/tailwind';

type PictureProps = {
  uri: string | null;
  containerStyle?: ViewStyle;
  imageStyle?: ViewStyle;
};

function Picture({ uri, imageStyle, containerStyle }: PictureProps) {
  const props = { style: tw.style('h-20 w-20 rounded-full', imageStyle) };

  return (
    <View style={tw.style('border-2 border-secondary-400 rounded-full p-0.5', containerStyle)}>
      {uri ? <Image style={props.style} source={{ uri }} /> : <Default {...props} />}
    </View>
  );
}

export default Picture;
