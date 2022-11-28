import React from 'react';
import { ActivityIndicator as ActivityIndicatorMain } from 'react-native';

import tw from 'libs/tailwind';

function ActivityIndicator() {
  return <ActivityIndicatorMain style={tw`my-2`} size="large" color={tw.color('primary-600')} />;
}

export default ActivityIndicator;
