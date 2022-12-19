import React, { useContext } from 'react';
import { ChatBubbleLeftEllipsisIcon } from 'react-native-heroicons/outline';

import tw from 'libs/tailwind';
import Action from './Action';
import postContext from '../context';

function CommentAction() {
  const { post } = useContext(postContext);

  return (
    <Action
      count={post.commentsCount}
      Icon={ChatBubbleLeftEllipsisIcon}
      iconStyle={tw`text-secondary-900`}
    />
  );
}

export default CommentAction;
