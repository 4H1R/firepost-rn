import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { IPost } from 'interfaces';
import tw from 'libs/tailwind';

interface PostImageProps extends IPost {}

function PostImage({ images, id }: PostImageProps) {
  const navigation = useNavigation();

  const handleNavigateToPost = () => {
    navigation.navigate('Root', {
      screen: 'Posts',
      params: { screen: 'Show', params: { id } },
    });
  };

  return (
    <TouchableOpacity onPress={handleNavigateToPost} activeOpacity={0.5} style={tw`w-[48%] m-1`}>
      <Image source={{ uri: images[0] }} style={tw`h-32 rounded skeleton`} />
    </TouchableOpacity>
  );
}

export default PostImage;
