import React, { useContext } from 'react';
import { FireIcon } from 'react-native-heroicons/outline';

import postContext from '../context';
import tw from 'libs/tailwind';
import Action from './Action';

function LikeAction() {
  const { isLiked, setIsLiked } = useContext(postContext);

  const handleLike = () => {
    setIsLiked(true);
  };
  const handleUnLike = () => {
    setIsLiked(false);
  };

  return (
    <Action
      Icon={FireIcon}
      onPress={isLiked ? handleUnLike : handleLike}
      iconStyle={tw.style('mr-4', {
        'text-secondary-900': !isLiked,
        'text-primary-600': isLiked,
      })}
    />
  );
}

export default LikeAction;
