import React from 'react';
import { FlatList } from 'react-native';

import tw from 'libs/tailwind';
import useGetPosts from 'services/posts';
import ActivityIndicator from 'shared/common/ActivityIndicator';
import SafeAreaView from 'shared/common/SafeAreaView';
import PostImage from 'components/posts/PostImage';
import SearchTextInput from 'shared/common/SearchTextInput';

function IndexScreen() {
  const { data: posts, isFetchingNextPage, fetchNextPage, isRefetching, refetch } = useGetPosts();

  return (
    <SafeAreaView>
      <FlatList
        refreshing={isRefetching}
        onRefresh={refetch}
        ListHeaderComponent={<SearchTextInput style={tw`mb-2`} onTextDebounced={() => {}} />}
        numColumns={2}
        onEndReachedThreshold={0.3}
        contentContainerStyle={tw`container`}
        data={posts?.pages.map((page) => page.data).flat()}
        keyExtractor={(post) => post.id.toString()}
        onEndReached={() => fetchNextPage()}
        ListFooterComponent={isFetchingNextPage ? <ActivityIndicator /> : null}
        renderItem={({ item: post }) => <PostImage {...post} />}
      />
    </SafeAreaView>
  );
}

export default IndexScreen;
