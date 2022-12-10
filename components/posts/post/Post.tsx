import React, { createContext, SetStateAction, useMemo, useState } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { useNavigation } from '@react-navigation/native';

import { IPostFull } from 'interfaces';
import { ZoomablePictureBorder } from 'shared/users/pictures';
import tw from 'libs/tailwind';
import ToggableText from 'shared/common/ToggableText';
import Actions from './actions';
import postContext from './context';

interface PostProps extends IPostFull {}

function Post({ image, user, description }: PostProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const navigation = useNavigation();

  const handleNavigateToUser = (username: string) => {
    navigation.navigate('Root', {
      screen: 'Users',
      params: { screen: 'Show', params: { username } },
    });
  };

  const value = useMemo(() => ({ isLiked, setIsLiked, isSaved, setIsSaved }), [isLiked, isSaved]);

  return (
    <postContext.Provider value={value}>
      <View style={tw`mb-2`}>
        <View style={tw`relative`}>
          <Image
            source={{ uri: image }}
            style={tw`w-full h-96 rounded-tl-3xl rounded-tr-3xl skeleton`}
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
                <Text style={tw`font-primary-semi text-base text-secondary-50`}>
                  {user.username}
                </Text>
                <Text style={tw`font-primary text-sm text-secondary-200`}>{user.name}</Text>
              </View>
            </TouchableOpacity>
          </BlurView>
        </View>
        <View style={tw`bg-secondary-200 container`}>
          <Actions />
          <ToggableText text={description} />
        </View>
      </View>
    </postContext.Provider>
  );
}

export default Post;
