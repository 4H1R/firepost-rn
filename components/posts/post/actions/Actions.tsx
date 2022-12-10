import React from 'react';
import { View } from 'react-native';
import { BookmarkIcon, ChatBubbleLeftEllipsisIcon } from 'react-native-heroicons/outline';

import tw from 'libs/tailwind';
import LikeAction from './LikeAction';
import CommentAction from './CommentAction';
import SaveAction from './SaveAction';

function Actions() {
  return (
    <View style={tw`flex-row justify-between mt-2`}>
      <View style={tw`flex-row`}>
        <LikeAction />
        <CommentAction />
      </View>
      <SaveAction />
    </View>
  );
}

export default Actions;
