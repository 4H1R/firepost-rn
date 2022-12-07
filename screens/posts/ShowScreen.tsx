import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';

import { TPostsStackParamList } from 'types';
import SafeAreaView from 'shared/common/SafeAreaView';
import Post from 'components/posts/post';
import useGetPost from 'services/posts/show';

function ShowScreen() {
  const { params } = useRoute<RouteProp<TPostsStackParamList, 'Show'>>();
  const { data: post } = useGetPost(params.id);

  if (!post) return null;
  return (
    <SafeAreaView>
      <Post {...post} />
    </SafeAreaView>
  );
}

export default ShowScreen;
