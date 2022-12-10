import React, { useContext } from 'react';
import { BookmarkIcon } from 'react-native-heroicons/outline';

import postContext from '../context';
import tw from 'libs/tailwind';
import Action from './Action';

function SaveAction() {
  const { isSaved, setIsSaved } = useContext(postContext);

  const handleSave = () => {
    setIsSaved(true);
  };
  const handleUnSave = () => {
    setIsSaved(false);
  };

  return (
    <Action
      Icon={BookmarkIcon}
      onPress={isSaved ? handleUnSave : handleSave}
      iconStyle={tw.style({
        'text-secondary-900': !isSaved,
        'text-primary-600': isSaved,
      })}
    />
  );
}

export default SaveAction;
