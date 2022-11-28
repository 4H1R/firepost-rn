import React from 'react';
import { FlatList, Image, TouchableOpacity } from 'react-native';

import tw from 'libs/tailwind';
import useGetPosts from 'services/posts';
import ActivityIndicator from 'shared/common/ActivityIndicator';

function PostsScreen() {
  const { data: posts, isFetchingNextPage, fetchNextPage } = useGetPosts();

  return (
    <FlatList
      contentContainerStyle={tw`container`}
      numColumns={2}
      onEndReachedThreshold={0.3}
      data={posts?.pages.map((page) => page.data).flat()}
      keyExtractor={(post) => post.id.toString()}
      onEndReached={() => fetchNextPage()}
      ListFooterComponent={isFetchingNextPage ? <ActivityIndicator /> : null}
      renderItem={({ item: post }) => (
        <TouchableOpacity activeOpacity={0.5} style={tw`flex-1 m-1 `}>
          <Image source={{ uri: post.image }} style={tw`h-24 rounded`} />
        </TouchableOpacity>
      )}
    />
  );
}

export default PostsScreen;
