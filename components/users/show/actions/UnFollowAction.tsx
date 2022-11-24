import { useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { UserMinusIcon } from 'react-native-heroicons/outline';
import useUnFollowUser from 'services/users/followers/delete';

import Action from './Action';

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
      onPress={handleUnFollow}
      isLoading={isLoading}
      title="Un Follow"
      Icon={UserMinusIcon}
      color="secondary"
    />
  );
}

export default UnFollowAction;
