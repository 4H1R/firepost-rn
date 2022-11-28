import React from 'react';
import { ScrollView } from 'react-native';
import {
  ChatBubbleBottomCenterIcon,
  NoSymbolIcon,
  ArrowPathIcon,
  BookmarkIcon,
} from 'react-native-heroicons/outline';

import Action from './Action';
import tw from 'libs/tailwind';
import FollowAction from './FollowAction';
import UnFollowAction from './UnFollowAction';
import LogoutAction from './LogoutAction';
import WebsiteAction from './WebsiteAction';

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
          {website && <WebsiteAction website={website} />}
          <Action title="Block" Icon={NoSymbolIcon} color="danger" />
        </>
      )}
    </ScrollView>
  );
}

export default Actions;
