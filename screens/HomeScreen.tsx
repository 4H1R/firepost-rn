import React from 'react';
import { Dimensions, FlatList, View } from 'react-native';

import tw from 'libs/tailwind';
import useGetHomePosts from 'services/posts/home';
import ActivityIndicator from 'shared/common/ActivityIndicator';
import Post from 'components/posts/post';
import BgContainer from 'shared/container/BgContainer';
import SafeAreaView from 'shared/common/SafeAreaView';

function HomeScreen() {
  const { data: posts, isFetchingNextPage, fetchNextPage } = useGetHomePosts();

  return (
    <BgContainer>
      <SafeAreaView>
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
      </SafeAreaView>
    </BgContainer>
  );
}

export default HomeScreen;
