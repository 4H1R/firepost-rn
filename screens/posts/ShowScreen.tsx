import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';

import { TPostsStackParamList } from 'types';
import Post from 'components/posts/post';
import useGetPost from 'services/posts/show';
import SafeScrollViewContainer from 'shared/container/SafeScrollViewContainer';
import BgContainer from 'shared/container/BgContainer';

function ShowScreen() {
  const { params } = useRoute<RouteProp<TPostsStackParamList, 'Show'>>();
  const { data: post } = useGetPost(params.id);

  if (!post) return null;
  return (
    <BgContainer>
      <SafeScrollViewContainer>
        <Post {...post} />
      </SafeScrollViewContainer>
    </BgContainer>
  );
}

export default ShowScreen;
