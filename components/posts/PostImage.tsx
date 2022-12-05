import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import { IPost } from 'interfaces';
import tw from 'libs/tailwind';

function PostImage({ image }: IPost) {
  return (
    <TouchableOpacity activeOpacity={0.5} style={tw`flex-1 m-1`}>
      <Image source={{ uri: image }} style={tw`h-32 rounded skeleton`} />
    </TouchableOpacity>
  );
}

export default PostImage;
