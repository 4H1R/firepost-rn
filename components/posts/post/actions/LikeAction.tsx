import React, { useContext } from 'react';
import { FireIcon as Outline } from 'react-native-heroicons/outline';
import { FireIcon as Solid } from 'react-native-heroicons/solid';

import { PostActionType } from '../reducer';
import postContext from '../context';
import tw from 'libs/tailwind';
import Action from './Action';
import useLikePost from 'services/posts/likes/create';
import useUnLikePost from 'services/posts/likes/delete';

function LikeAction() {
  const { post, state, dispatch, likersRef } = useContext(postContext);
  const { isLiked } = state;
  const { mutate: like } = useLikePost();
  const { mutate: unLike } = useUnLikePost();

  const handleOpenLikers = () => likersRef.current?.present();

  const handleLike = () => {
    dispatch({ type: PostActionType.LIKE });
    like(post.id, {
      onError: () => {
        dispatch({ type: PostActionType.UN_LIKE });
      },
    });
  };
  const handleUnLike = () => {
    dispatch({ type: PostActionType.UN_LIKE });
    unLike(post.id, {
      onError: () => {
        dispatch({ type: PostActionType.LIKE });
      },
    });
  };

  return (
    <Action
      Icon={isLiked ? Solid : Outline}
      addMargin
      count={state.likesCount}
      onPress={isLiked ? handleUnLike : handleLike}
      onTextPress={handleOpenLikers}
      iconStyle={tw.style('', {
        'text-secondary-900': !isLiked,
        'text-primary-600': isLiked,
      })}
    />
  );
}

export default LikeAction;
