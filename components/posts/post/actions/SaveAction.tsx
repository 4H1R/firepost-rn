import React, { useContext } from 'react';
import { BookmarkIcon as Outline } from 'react-native-heroicons/outline';
import { BookmarkIcon as Solid } from 'react-native-heroicons/solid';

import { PostActionType } from '../reducer';
import postContext from '../context';
import tw from 'libs/tailwind';
import Action from './Action';

function SaveAction() {
  const { state, dispatch } = useContext(postContext);
  const { isSaved } = state;

  const handleSave = () => {
    dispatch({ type: PostActionType.SAVE });
  };

  const handleUnSave = () => {
    dispatch({ type: PostActionType.UN_SAVE });
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
