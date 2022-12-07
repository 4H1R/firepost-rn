import React from 'react';
import { FlatList, View } from 'react-native';

import tw from 'libs/tailwind';
import useGetHomePosts from 'services/posts/home';
import ActivityIndicator from 'shared/common/ActivityIndicator';
import Post from 'components/posts/post';

function HomeScreen() {
  const { data: posts, isFetchingNextPage, fetchNextPage } = useGetHomePosts();

  return (
    <View style={tw`bg-color flex-1`}>
      <FlatList
        onEndReachedThreshold={0.3}
        numColumns={1}
        removeClippedSubviews
        contentContainerStyle={tw`container`}
        data={posts?.pages.map((page) => page.data).flat()}
        keyExtractor={(post) => post.id.toString()}
        onEndReached={() => fetchNextPage()}
        ListFooterComponent={isFetchingNextPage ? <ActivityIndicator /> : null}
        renderItem={({ item: post }) => <Post {...post} />}
      />
    </View>
  );
}

export default HomeScreen;
