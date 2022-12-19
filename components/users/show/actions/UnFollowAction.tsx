import React from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { UserMinusIcon } from 'react-native-heroicons/outline';

import Action from './Action';
import useUnFollowUser from 'services/users/followers/delete';

type UnFollowActionProps = {
  username: string;
};

function UnFollowAction({ username }: UnFollowActionProps) {
  const { mutate, isLoading } = useUnFollowUser();
  const queryClient = useQueryClient();

  const handleUnFollow = () => {
    mutate(username, {
      onSuccess: () => {
        queryClient.invalidateQueries(['users', username]);
      },
    });
  };

  return (
    <Action
      checkForDoubleClick
      onPress={handleUnFollow}
      title="Un Follow"
      Icon={UserMinusIcon}
      isLoading={isLoading}
      color="secondary"
    />
  );
}

export default UnFollowAction;
