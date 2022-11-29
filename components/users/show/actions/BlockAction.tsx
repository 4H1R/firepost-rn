import React from 'react';
import { NoSymbolIcon } from 'react-native-heroicons/outline';

import { useDoubleClick } from 'hooks';
import Action from './Action';

type BlockActionProps = {
  username: string;
};

function BlockAction({ username }: BlockActionProps) {
  const { isDoubledClicked, handleDoubleClickToggle } = useDoubleClick();

  const handleBlock = () => {
    console.log(`${username} got blocked`);
    // Todo implement blocking
  };

  return (
    <Action
      onPress={isDoubledClicked ? handleBlock : handleDoubleClickToggle}
      title={isDoubledClicked ? 'Are you Sure ?' : 'Block'}
      Icon={NoSymbolIcon}
      color="danger"
    />
  );
}

export default BlockAction;
