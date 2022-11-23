import React from 'react';
import { ScrollView } from 'react-native';
import {
  PlusIcon,
  ChatBubbleBottomCenterIcon,
  NoSymbolIcon,
  GlobeAltIcon,
} from 'react-native-heroicons/outline';

import Action from './Action';
import tw from 'libs/tailwind';
import FollowAction from './FollowAction';
import UnFollowAction from './UnFollowAction';

type ActionsProps = {
  username: string;
  website: string | null;
  isFollowed: boolean;
};

function Actions({ username, website, isFollowed }: ActionsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={tw`flex-row items-center mt-4`}
    >
      {isFollowed ? <UnFollowAction username={username} /> : <FollowAction username={username} />}
      <Action title="Message" Icon={ChatBubbleBottomCenterIcon} color="secondary-outline" />
      {website && <Action title="Website" Icon={GlobeAltIcon} color="secondary-outline" />}
      <Action title="Block" Icon={NoSymbolIcon} color="danger" />
    </ScrollView>
  );
}

export default Actions;
