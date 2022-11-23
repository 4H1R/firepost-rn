import React from 'react';
import { UserMinusIcon } from 'react-native-heroicons/outline';

import Action from './Action';

type UnFollowActionProps = {
  username: string;
};

function UnFollowAction({ username }: UnFollowActionProps) {
  return <Action title="Un Follow" Icon={UserMinusIcon} color="secondary" />;
}

export default UnFollowAction;
