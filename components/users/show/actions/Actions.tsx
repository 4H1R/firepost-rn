import React from 'react';
import { ScrollView } from 'react-native';
import {
  ChatBubbleBottomCenterIcon,
  NoSymbolIcon,
  GlobeAltIcon,
  ArrowPathIcon,
  BookmarkIcon,
} from 'react-native-heroicons/outline';

import Action from './Action';
import tw from 'libs/tailwind';
import FollowAction from './FollowAction';
import UnFollowAction from './UnFollowAction';
import LogoutAction from './LogoutAction';

type ActionsProps = {
  username: string;
  authUsername: string;
  website: string | null;
  isFollowed: boolean;
};

function Actions({ username, authUsername, website, isFollowed }: ActionsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={tw`flex-row items-center mt-4`}
    >
      {authUsername === username ? (
        <>
          <Action title="Saved Posts" Icon={BookmarkIcon} color="primary" />
          <Action title="Edit" Icon={ArrowPathIcon} color="secondary-outline" />
          <LogoutAction />
        </>
      ) : (
        <>
          {isFollowed ? (
            <UnFollowAction username={username} />
          ) : (
            <FollowAction username={username} />
          )}
          <Action title="Message" Icon={ChatBubbleBottomCenterIcon} color="secondary-outline" />
          {website && <Action title="Website" Icon={GlobeAltIcon} color="secondary-outline" />}
          <Action title="Block" Icon={NoSymbolIcon} color="danger" />
        </>
      )}
    </ScrollView>
  );
}

export default Actions;
