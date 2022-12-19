import React from 'react';
import { GlobeAltIcon } from 'react-native-heroicons/outline';
import * as WebBrowser from 'expo-web-browser';

import Action from './Action';

type WebsiteActionProps = {
  url: string;
};

function WebsiteAction({ url }: WebsiteActionProps) {
  const handleVisitWebsite = () => WebBrowser.openBrowserAsync(url);

  return (
    <Action
      checkForDoubleClick
      doubleClickText="Visit the Website?"
      title="Website"
      color="secondary-outline"
      Icon={GlobeAltIcon}
      onPress={handleVisitWebsite}
    />
  );
}

export default WebsiteAction;
