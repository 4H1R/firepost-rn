import React from 'react';
import { FlatList } from 'react-native';

import tw from 'libs/tailwind';
import ActivityIndicator from 'shared/common/ActivityIndicator';
import SafeAreaView from 'shared/common/SafeAreaView';
import PostImage from 'components/posts/PostImage';
import Title from 'shared/common/Title';
import useGetSavedPosts from 'services/posts/saved';
import BgContainer from 'shared/container/BgContainer';

function SavedScreen() {
  const { data: posts, isFetchingNextPage, fetchNextPage } = useGetSavedPosts();

  return (
    <BgContainer>
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
    </BgContainer>
  );
}

export default SavedScreen;
