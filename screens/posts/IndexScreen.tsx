import React from 'react';
import { FlatList, Image, TextInput, TouchableOpacity, View } from 'react-native';

import tw from 'libs/tailwind';
import useGetPosts from 'services/posts';
import ActivityIndicator from 'shared/common/ActivityIndicator';
import SafeAreaView from 'shared/common/SafeAreaView';

function IndexScreen() {
  const { data: posts, isFetchingNextPage, fetchNextPage } = useGetPosts();

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={
          <TextInput
            placeholder="Search ..."
            style={tw`px-2 py-1 bg-secondary-200 rounded-lg font-primary mb-2`}
          />
        }
        removeClippedSubviews
        numColumns={2}
        onEndReachedThreshold={0.3}
        contentContainerStyle={tw`container`}
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
    </SafeAreaView>
  );
}

export default IndexScreen;
