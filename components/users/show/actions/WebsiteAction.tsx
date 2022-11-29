import React from 'react';
import { GlobeAltIcon } from 'react-native-heroicons/outline';
import * as WebBrowser from 'expo-web-browser';

import { useDoubleClick } from 'hooks';
import Action from './Action';

type WebsiteActionProps = {
  url: string;
};

function WebsiteAction({ url }: WebsiteActionProps) {
  const { isDoubledClicked, handleDoubleClickToggle } = useDoubleClick();

  const handleVisitWebsite = () => WebBrowser.openBrowserAsync(url);

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
