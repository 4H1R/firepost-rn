import React, { useMemo, useReducer, useRef, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { useNavigation } from '@react-navigation/native';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import moment from 'moment';

import { IPostFull } from 'interfaces';
import { ZoomablePictureBorder } from 'shared/users/pictures';
import { postReducer } from './reducer';
import tw from 'libs/tailwind';
import ToggableText from 'shared/common/ToggableText';
import Actions from './actions';
import postContext from './context';
import UsersBottomSheet from 'components/users/UsersBottomSheet';
import useGetPostLikers from 'services/posts/likes';
import Empty from 'shared/list/Empty';
import Images from '../images';
import Paginator from '../images/Paginator';

interface PostProps extends IPostFull {}

function Post(post: PostProps) {
  const { images, user, description, likesCount, id, isLiked, isSaved, createdAt } = post;
  const [state, dispatch] = useReducer(postReducer, { isLiked, isSaved, likesCount });
  const navigation = useNavigation();
  const likersRef = useRef<BottomSheetModal>(null);
  const [imagesIndex, setImagesIndex] = useState(0);

  const handleNavigateToUser = (username: string) => {
    navigation.navigate('Root', {
      screen: 'Users',
      params: { screen: 'Show', params: { username } },
    });
  };

  const value = useMemo(() => ({ state, post, dispatch, likersRef }), [state, post]);

  return (
    <postContext.Provider value={value}>
      <View style={tw`mb-2`}>
        <Images setCurrentIndex={setImagesIndex} images={images} />
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
        <View style={tw`bg-secondary-200 container`}>
          <Paginator activeIndex={imagesIndex} total={images.length} />
          <Actions />
          <ToggableText text={description} />
          <Text style={tw`font-primary text-xs text-secondary-700`}>
            {moment(createdAt, 'YYYYMMDD').fromNow()}
          </Text>
        </View>
      </View>
      <BottomSheetModalProvider>
        <UsersBottomSheet
          useQuery={useGetPostLikers}
          identifier={id}
          modalRef={likersRef}
          title="Likers"
          Empty={<Empty title="No Likes" description="No one liked this post be the first one." />}
        />
      </BottomSheetModalProvider>
    </postContext.Provider>
  );
}

export default Post;
