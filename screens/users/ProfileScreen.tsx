import React, { useRef } from 'react';
import { View } from 'react-native';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import Picture from 'components/users/show/Picture';
import NumberData from 'components/users/show/NumberData';
import tw from 'libs/tailwind';
import useGetUser from 'services/users/show';
import useAuthUser from 'stores/authStore';
import Container from 'shared/common/Container';
import Username from 'components/users/show/Username';
import Name from 'components/users/show/Name';
import Bio from 'components/users/show/Bio';
import FollowersBottomSheet from 'components/users/bottomSheets/FollowersBottomSheet';
import FollowingsBottomSheet from 'components/users/bottomSheets/FollowingsBottomSheet';

function ProfileScreen() {
  const authUser = useAuthUser((state) => state.user);
  const followersRef = useRef<BottomSheetModal>(null);
  const followingsRef = useRef<BottomSheetModal>(null);
  const { data: user } = useGetUser(authUser!.username);

  const handleOpenFollowers = () => followersRef.current?.present();
  const handleOpenFollowings = () => followingsRef.current?.present();

  if (!user) return null;

  return (
    <BottomSheetModalProvider>
      <Container>
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
      </Container>
      <FollowersBottomSheet username={authUser!.username} modalRef={followersRef} />
      <FollowingsBottomSheet username={authUser!.username} modalRef={followingsRef} />
    </BottomSheetModalProvider>
  );
}
export default ProfileScreen;
