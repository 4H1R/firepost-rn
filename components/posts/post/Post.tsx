import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import {
  BookmarkIcon,
  ChatBubbleLeftEllipsisIcon,
  FireIcon,
  PaperAirplaneIcon,
} from 'react-native-heroicons/outline';
import { BlurView } from 'expo-blur';
import { useNavigation } from '@react-navigation/native';

import { IPostWithUser } from 'interfaces';
import { ZoomablePictureBorder } from 'shared/users/pictures';
import tw from 'libs/tailwind';
import ToggableText from 'shared/common/ToggableText';

interface PostProps extends IPostWithUser {}

function Post({ image, user, description }: PostProps) {
  const navigation = useNavigation();

  const handleNavigateToUser = (username: string) => {
    navigation.navigate('Root', {
      screen: 'Users',
      params: { screen: 'Show', params: { username } },
    });
  };

  return (
    <View style={tw`mb-2`}>
      <View style={tw`relative`}>
        <Image
          source={{ uri: image }}
          style={tw`w-full h-80 rounded-tl-3xl rounded-tr-3xl skeleton`}
        />
        <BlurView
          intensity={80}
          tint="dark"
          style={tw`absolute rounded-3xl py-1 pl-2 pr-3 left-3 top-3`}
        >
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => handleNavigateToUser(user.username)}
            style={tw`flex-row items-center justify-center`}
          >
            <ZoomablePictureBorder uri={user.image} style={tw`h-10 w-10`} />
            <View style={tw`ml-2`}>
              <Text style={tw`font-primary-semi text-base text-secondary-50`}>{user.username}</Text>
              <Text style={tw`font-primary text-sm text-secondary-200`}>{user.name}</Text>
            </View>
          </TouchableOpacity>
        </BlurView>
      </View>
      <View style={tw`bg-secondary-200 container`}>
        <View style={tw`flex-row justify-between mt-2`}>
          <View style={tw`flex-row`}>
            <ChatBubbleLeftEllipsisIcon style={tw`w-4 h-4 text-secondary-900 mr-4`} />
            <PaperAirplaneIcon style={tw`w-4 h-4 text-secondary-900 mr-4`} />
            <BookmarkIcon style={tw`w-4 h-4 text-secondary-900 mr-4`} />
          </View>
          <FireIcon style={tw`w-4 h-4 text-secondary-900`} />
        </View>
        <ToggableText text={description} />
      </View>
    </View>
  );
}

export default Post;
