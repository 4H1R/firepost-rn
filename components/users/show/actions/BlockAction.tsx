import React from 'react';
import { NoSymbolIcon } from 'react-native-heroicons/outline';

import { useDoubleClick } from 'hooks';
import Action from './Action';

type BlockActionProps = {
  username: string;
};

function BlockAction({ username }: BlockActionProps) {
  const handleBlock = () => {
    console.log(`${username} got blocked`);
    // Todo implement blocking
  };

  return (
    <Action
      checkForDoubleClick
      onPress={handleBlock}
      title="Block"
      Icon={NoSymbolIcon}
      color="danger"
    />
  );
}

export default BlockAction;
