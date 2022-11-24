import React, { useRef } from 'react';
import { FlatList, View } from 'react-native';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { RouteProp, useRoute } from '@react-navigation/native';

import { TRootTabParamList } from 'types';
import Picture from 'components/users/show/Picture';
import NumberData from 'components/users/show/NumberData';
import tw from 'libs/tailwind';
import useGetUser from 'services/users/show';
import useAuthUser from 'stores/authStore';
import Username from 'components/users/show/Username';
import Name from 'components/users/show/Name';
import Bio from 'components/users/show/Bio';
import Actions from 'components/users/show/actions';
import UsersBottomSheet from 'components/users/UsersBottomSheet';
import useGetUserFollowers from 'services/users/followers';
import useGetUserFollowings from 'services/users/followings';

function ProfileScreen() {
  const authUser = useAuthUser((state) => state.user);
  const { params } = useRoute<RouteProp<TRootTabParamList, 'Profile'>>();
  const followersRef = useRef<BottomSheetModal>(null);
  const followingsRef = useRef<BottomSheetModal>(null);
  const { data: user } = useGetUser(params.username);

  const handleOpenFollowers = () => followersRef.current?.present();
  const handleOpenFollowings = () => followingsRef.current?.present();
  const data = Array.from({ length: 10 }).map((_, i) => i);

  if (!user) return null;

  return (
    <BottomSheetModalProvider>
      <FlatList
        ListHeaderComponent={
          <View style={tw`mb-4`}>
            <View style={tw`flex-row items-center justify-between`}>
              <Picture />
              <View style={tw`flex-row items-center justify-center`}>
                <NumberData count={user.postsCount} title="Posts" />
                <NumberData
                  onPress={handleOpenFollowers}
                  count={user.followersCount}
                  title="Followers"
                />
                <NumberData
                  onPress={handleOpenFollowings}
                  count={user.followingsCount}
                  title="Followings"
                />
              </View>
            </View>
            <Username username={user.username} isVerified={user.isVerified} />
            <Name name={user.name} />
            <Bio bio={user.bio} />
            <Actions
              isFollowed={user.isFollowed}
              username={user.username}
              authUsername={authUser!.username}
              website={user.website}
            />
          </View>
        }
        contentContainerStyle={tw`container`}
        numColumns={3}
        data={data}
        keyExtractor={(i) => i.toString()}
        renderItem={(item) => (
          <View style={tw`flex-1 h-24 bg-secondary-300 mx-1 my-1 rounded`}></View>
        )}
      />
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
export default ProfileScreen;
