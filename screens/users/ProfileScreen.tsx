import React from 'react';
import { Text, View } from 'react-native';
import { CheckBadgeIcon } from 'react-native-heroicons/outline';

import Picture from 'components/users/show/Picture';
import NumberData from 'components/users/show/NumberData';
import tw from 'libs/tailwind';
import useGetUser from 'services/users/show';
import useAuthUser from 'stores/authStore';
import Container from 'shared/common/Container';

function ProfileScreen() {
  const user = useAuthUser((state) => state.user);
  const { data } = useGetUser(user!.username);

  if (!data) return null;
  return (
    <Container>
      <View style={tw`flex-row items-center justify-between`}>
        <Picture />
        <View style={tw`flex-row items-center justify-center`}>
          <NumberData count={data.postsCount} title="Posts" />
          <NumberData
            onPress={() => console.log('pressed')}
            count={data.followersCount}
            title="Followers"
          />
          <NumberData count={data.followingsCount} title="Followings" />
        </View>
      </View>
      <View style={tw`flex-row items-end`}>
        <Text style={tw`font-primary-bold text-base mt-2 mr-1`}>{data.username}</Text>
        {data.isVerified && <CheckBadgeIcon style={tw`w-3 h-3w-3 text-primary-600`} />}
      </View>
      <Text style={tw`font-primary-medium text-sm text-secondary-400 mt-1`}>{data.name}</Text>
      {data.bio && (
        <Text style={tw`font-primary-medium text-sm text-secondary-900 mt-2`}>{data.bio}</Text>
      )}
    </Container>
  );
}
export default ProfileScreen;
