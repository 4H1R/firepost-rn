import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import tw from 'libs/tailwind';
import ActivityIndicator from 'shared/common/ActivityIndicator';
import SafeAreaView from 'shared/common/SafeAreaView';
import PostImage from 'components/posts/PostImage';
import useGetSavedPosts from 'services/posts/saved';
import BgContainer from 'shared/container/BgContainer';
import TitleWithBackButton from 'shared/common/TitleWithBackButton';
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

  const handleNavigateToProfile = () => {
    navigation.navigate('Root', {
      screen: 'Users',
      params: { screen: 'Show', params: { username } },
    });
  };

  return (
    <BgContainer>
      <SafeAreaView>
        <FlatList
          refreshing={isRefetching}
          onRefresh={refetch}
          numColumns={2}
          onEndReachedThreshold={0.3}
          contentContainerStyle={tw`container`}
          ListHeaderComponent={
            <TitleWithBackButton title="Saved Posts" onGoBack={handleNavigateToProfile} />
          }
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
