import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import tw from 'libs/tailwind';
import ActivityIndicator from 'shared/common/ActivityIndicator';
import PostImage from 'components/posts/PostImage';
import useGetSavedPosts from 'services/posts/saved';
import BgContainer from 'shared/container/BgContainer';
import useAuthUser from 'stores/authStore';

function SavedScreen() {
  const username = useAuthUser((state) => state.user!.username);
  const navigation = useNavigation();
  const {
    data: posts,
    isFetchingNextPage,
    fetchNextPage,
    isRefetching,
    refetch,
  } = useGetSavedPosts();

  return (
    <BgContainer>
      <FlatList
        refreshing={isRefetching}
        onRefresh={refetch}
        numColumns={2}
        onEndReachedThreshold={0.3}
        contentContainerStyle={tw`container`}
        data={posts?.pages.map((page) => page.data).flat()}
        keyExtractor={(post) => post.id.toString()}
        onEndReached={() => fetchNextPage()}
        ListFooterComponent={isFetchingNextPage ? <ActivityIndicator /> : null}
        renderItem={({ item: post }) => <PostImage {...post} />}
      />
    </BgContainer>
  );
}

export default SavedScreen;
