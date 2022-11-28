import React from 'react';
import { GlobeAltIcon } from 'react-native-heroicons/outline';

import { useDoubleClick } from 'hooks';
import Action from './Action';

type WebsiteActionProps = {
  website: string;
};

function WebsiteAction({ website }: WebsiteActionProps) {
  const { isDoubledClicked, handleDoubleClickToggle } = useDoubleClick();

  const handleVisitWebsite = () => {};

  return (
    <Action
      title={isDoubledClicked ? 'Visit the Website ?' : 'Website'}
      color="secondary-outline"
      Icon={GlobeAltIcon}
      onPress={isDoubledClicked ? handleVisitWebsite : handleDoubleClickToggle}
    />
  );
}

export default WebsiteAction;
