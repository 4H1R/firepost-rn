import React from 'react';
import { Text, TextStyle, View } from 'react-native';
import { CheckBadgeIcon } from 'react-native-heroicons/outline';
import { Rect } from 'react-content-loader/native';

import { getRandomNumber } from 'utils';
import tw from 'libs/tailwind';
import ContentLoader from 'libs/ContentLoader';

function Loader() {
  const props = { width: getRandomNumber(100, 200), height: 30 };
  return (
    <ContentLoader {...props}>
      <Rect x="0" y="10" rx="4" ry="4" {...props} />
    </ContentLoader>
  );
}

type UsernameProps = {
  username: string;
  isVerified: boolean;
  usernameStyle?: TextStyle;
  isLoading?: boolean;
};

function Username({ username, isVerified, usernameStyle, isLoading }: UsernameProps) {
  if (isLoading) return <Loader />;
  return (
    <View style={tw`flex-row items-center mt-2`}>
      <Text style={tw.style('font-primary-bold text-xl mr-1', usernameStyle)}>{username}</Text>
      {isVerified && <CheckBadgeIcon style={tw`w-3 h-3w-3 text-primary-600`} />}
    </View>
  );
}

export default Username;
