import React from 'react';
import { ScrollView } from 'react-native';
import {
  ChatBubbleBottomCenterIcon,
  ArrowPathIcon,
  BookmarkIcon,
} from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

import Action from './Action';
import tw from 'libs/tailwind';
import FollowAction from './FollowAction';
import UnFollowAction from './UnFollowAction';
import LogoutAction from './LogoutAction';
import WebsiteAction from './WebsiteAction';
import BlockAction from './BlockAction';

type ActionsProps = {
  username: string;
  authUsername: string;
  website: string | null;
  isFollowed: boolean;
};

function Actions({ username, authUsername, website, isFollowed }: ActionsProps) {
  const navigation = useNavigation();

  const handleNavigateToEdit = () => {
    navigation.navigate('Root', {
      screen: 'Users',
      params: { screen: 'Edit' },
    });
  };

  const handleNavigateToSavedPosts = () => {
    navigation.navigate('Root', {
      screen: 'Posts',
      params: { screen: 'Saved' },
    });
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={tw`flex-row items-center mt-4`}
    >
      {authUsername === username ? (
        <>
          <Action
            onPress={handleNavigateToSavedPosts}
            title="Saved Posts"
            Icon={BookmarkIcon}
            color="primary"
          />
          <Action
            onPress={handleNavigateToEdit}
            title="Edit"
            Icon={ArrowPathIcon}
            color="secondary-outline"
          />
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
          {website && <WebsiteAction url={website} />}
          <BlockAction username={username} />
        </>
      )}
    </ScrollView>
  );
}

export default Actions;
