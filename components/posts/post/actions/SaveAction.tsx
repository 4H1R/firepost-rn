import React, { useContext } from 'react';
import { BookmarkIcon as Outline } from 'react-native-heroicons/outline';
import { BookmarkIcon as Solid } from 'react-native-heroicons/solid';

import { PostActionType } from '../reducer';
import postContext from '../context';
import tw from 'libs/tailwind';
import Action from './Action';
import useSavePost from 'services/posts/saved/create';
import useUnSavePost from 'services/posts/saved/delete';

function SaveAction() {
  const { state, dispatch, post } = useContext(postContext);
  const { isSaved } = state;
  const { mutate: save } = useSavePost();
  const { mutate: unSave } = useUnSavePost();

  const handleSave = () => {
    dispatch({ type: PostActionType.SAVE });
    save(post.id, {
      onError: () => {
        dispatch({ type: PostActionType.UN_SAVE });
      },
    });
  };

  const handleUnSave = () => {
    dispatch({ type: PostActionType.UN_SAVE });
    unSave(post.id, {
      onError: () => {
        dispatch({ type: PostActionType.SAVE });
      },
    });
  };

  return (
    <Action
      Icon={isSaved ? Solid : Outline}
      onPress={isSaved ? handleUnSave : handleSave}
      iconStyle={tw.style({
        'text-secondary-900': !isSaved,
        'text-primary-600': isSaved,
      })}
    />
  );
}

export default SaveAction;
