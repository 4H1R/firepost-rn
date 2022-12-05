import React, { useRef } from 'react';
import { FlatList, View } from 'react-native';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { RouteProp, useRoute } from '@react-navigation/native';

import { TUsersStackParamList } from 'types';
import Picture from 'components/users/show/Picture';
import NumberData from 'components/users/show/NumberData';
import tw from 'libs/tailwind';
import useGetUser from 'services/users/show';
import useAuthUser from 'stores/authStore';
import Username from 'components/users/show/Username';
import Name from 'components/users/show/Name';
import Actions from 'components/users/show/actions';
import UsersBottomSheet from 'components/users/UsersBottomSheet';
import useGetUserFollowers from 'services/users/followers';
import useGetUserFollowings from 'services/users/followings';
import ActivityIndicator from 'shared/common/ActivityIndicator';
import useGetUserPosts from 'services/users/posts';
import ToggableText from 'shared/common/ToggableText';
import PostImage from 'components/posts/PostImage';

function ShowScreen() {
  const authUser = useAuthUser((state) => state.user);
  const { params } = useRoute<RouteProp<TUsersStackParamList, 'Show'>>();
  const followersRef = useRef<BottomSheetModal>(null);
  const followingsRef = useRef<BottomSheetModal>(null);
  const { data: user } = useGetUser(params.username);
  const {
    data: posts,
    isFetchingNextPage: isFetchingMorePosts,
    hasNextPage: hasMorePosts,
    fetchNextPage: fetchMorePosts,
  } = useGetUserPosts(params.username);

  const handleOpenFollowers = () => followersRef.current?.present();
  const handleOpenFollowings = () => followingsRef.current?.present();
  const handleLoadMorePosts = () => hasMorePosts && fetchMorePosts();

  if (!user) return null;

  return (
    <BottomSheetModalProvider>
      <View style={tw`bg-color flex-1`}>
        <FlatList
          ListHeaderComponent={
            <View style={tw`mb-4`}>
              <View style={tw`flex-row items-center justify-between`}>
                <Picture uri={user.image} />
                <View style={tw`flex-row items-center justify-center`}>
                  <NumberData count={user?.postsCount} title="Posts" />
                  <NumberData
                    onPress={handleOpenFollowers}
                    count={user?.followersCount}
                    title="Followers"
                  />
                  <NumberData
                    onPress={handleOpenFollowings}
                    count={user?.followingsCount}
                    title="Followings"
                  />
                </View>
              </View>
              <Username username={user?.username} isVerified={user?.isVerified} />
              <Name name={user?.name} />
              <ToggableText text={user?.bio} />
              <Actions
                isFollowed={user?.isFollowed}
                username={user?.username}
                authUsername={authUser!.username}
                website={user?.website}
              />
            </View>
          }
          contentContainerStyle={tw`container`}
          numColumns={2}
          onEndReachedThreshold={0.3}
          onEndReached={handleLoadMorePosts}
          data={posts?.pages.map((page) => page.data).flat()}
          keyExtractor={(post) => post.id.toString()}
          ListFooterComponent={isFetchingMorePosts ? <ActivityIndicator /> : null}
          renderItem={({ item: post }) => <PostImage {...post} />}
        />
      </View>
      <UsersBottomSheet
        title="Followers"
        useQuery={useGetUserFollowers}
        username={params.username}
        modalRef={followersRef}
      />
      <UsersBottomSheet
        title="Followings"
        useQuery={useGetUserFollowings}
        username={params.username}
        modalRef={followingsRef}
      />
    </BottomSheetModalProvider>
  );
}
export default ShowScreen;
