import React from 'react';
import { ChatBubbleLeftEllipsisIcon } from 'react-native-heroicons/outline';

import tw from 'libs/tailwind';
import Action from './Action';

function CommentAction() {
  return <Action Icon={ChatBubbleLeftEllipsisIcon} iconStyle={tw`text-secondary-900`} />;
}

export default CommentAction;
