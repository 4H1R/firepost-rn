import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import {
  PlusIcon,
  ChatBubbleBottomCenterIcon,
  NoSymbolIcon,
  GlobeAltIcon,
  CheckBadgeIcon,
} from 'react-native-heroicons/outline';
import { RouteProp, useRoute } from '@react-navigation/native';

import { TRootTabParamList } from 'types';
import Container from 'shared/common/Container';
import Picture from 'components/users/show/Picture';
import NumberData from 'components/users/show/NumberData';
import Action from 'components/users/show/Action';
import tw from 'libs/tailwind';
import useGetUser from 'services/users/show';

function ProfileScreen() {
  const { params } = useRoute<RouteProp<TRootTabParamList, 'Profile'>>();
  const { data } = useGetUser(params.username);

  return (
    <Container>
      <View style={tw`flex-row items-center justify-between`}>
        <Picture />
        <View style={tw`flex-row items-center justify-center`}>
          <NumberData count={128} title="Posts" />
          <NumberData count={3223} title="Followers" />
          <NumberData count={512} title="Followings" />
        </View>
      </View>
      <View style={tw`flex-row items-end`}>
        <Text style={tw`font-primary-bold text-base mt-2 mr-1`}>{data?.username}</Text>
        {data?.isVerified && <CheckBadgeIcon style={tw`w-3 h-3w-3 text-primary-600`} />}
      </View>
      <Text style={tw`font-primary-medium text-sm text-secondary-400 mt-1`}>{data?.name}</Text>
      {data?.bio && (
        <Text style={tw`font-primary-medium text-sm text-secondary-900 mt-2`}>{data?.bio}</Text>
      )}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={tw`flex-row items-center mt-4`}
      >
        <Action title="Follow" Icon={PlusIcon} color="primary" />
        <Action title="Message" Icon={ChatBubbleBottomCenterIcon} color="secondary-outline" />
        <Action title="Website" Icon={GlobeAltIcon} color="secondary-outline" />
        <Action title="Block" Icon={NoSymbolIcon} color="danger" />
      </ScrollView>
    </Container>
  );
}
export default ProfileScreen;
