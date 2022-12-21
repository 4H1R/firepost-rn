import React from 'react';
import { FlatList } from 'react-native';

import tw from 'libs/tailwind';
import useGetHomePosts from 'services/posts/home';
import ActivityIndicator from 'shared/common/ActivityIndicator';
import Post from 'components/posts/post';
import BgContainer from 'shared/container/BgContainer';
import SafeAreaView from 'shared/common/SafeAreaView';

function HomeScreen() {
  const {
    data: posts,
    isFetchingNextPage,
    fetchNextPage,
    refetch,
    isRefetching,
  } = useGetHomePosts();

  return (
    <BgContainer>
      <SafeAreaView />
      <FlatList
        refreshing={isRefetching}
        onRefresh={refetch}
        onEndReachedThreshold={0.3}
        numColumns={1}
        contentContainerStyle={tw`container`}
        data={posts?.pages.map((page) => page.data).flat()}
        keyExtractor={(post) => post.id.toString()}
        onEndReached={() => fetchNextPage()}
        ListFooterComponent={isFetchingNextPage ? <ActivityIndicator /> : null}
        renderItem={({ item: post }) => <Post {...post} />}
      />
    </BgContainer>
  );
}

export default HomeScreen;
