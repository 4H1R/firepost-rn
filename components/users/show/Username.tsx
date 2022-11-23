import React from 'react';
import { StyleSheetProperties, Text, TextStyle, View } from 'react-native';
import { CheckBadgeIcon } from 'react-native-heroicons/outline';

import tw from 'libs/tailwind';

type UsernameProps = {
  username: string;
  isVerified: boolean;
  usernameStyle?: TextStyle;
};

function Username({ username, isVerified, usernameStyle }: UsernameProps) {
  return (
    <View style={tw`flex-row items-end`}>
      <Text style={tw.style('font-primary-bold text-xl mt-2 mr-1', usernameStyle)}>{username}</Text>
      {isVerified && <CheckBadgeIcon style={tw`w-3 h-3w-3 text-primary-600`} />}
    </View>
  );
}

export default Username;
