import React from 'react';
import { FlatList } from 'react-native';

import tw from 'libs/tailwind';
import useGetPosts from 'services/posts';
import ActivityIndicator from 'shared/common/ActivityIndicator';
import SafeAreaView from 'shared/common/SafeAreaView';
import PostImage from 'components/posts/PostImage';
import Title from 'shared/common/Title';

function SavedScreen() {
  const { data: posts, isFetchingNextPage, fetchNextPage } = useGetPosts();

  return (
    <SafeAreaView>
      <FlatList
        numColumns={2}
        onEndReachedThreshold={0.3}
        contentContainerStyle={tw`container`}
        ListHeaderComponent={<Title text="Saved Posts" />}
        data={posts?.pages.map((page) => page.data).flat()}
        keyExtractor={(post) => post.id.toString()}
        onEndReached={() => fetchNextPage()}
        ListFooterComponent={isFetchingNextPage ? <ActivityIndicator /> : null}
        renderItem={({ item: post }) => <PostImage {...post} />}
      />
    </SafeAreaView>
  );
}

export default SavedScreen;
