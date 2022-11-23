import { useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { UserPlusIcon } from 'react-native-heroicons/outline';
import useFollowUser from 'services/users/followers/create';

import Action from './Action';

type FollowActionProps = {
  username: string;
};

function FollowAction({ username }: FollowActionProps) {
  const { mutate, isLoading } = useFollowUser();
  const queryClient = useQueryClient();

  const handleFollow = () => {
    mutate(username, {
      onSuccess: () => {
        queryClient.invalidateQueries(['users', username]);
      },
    });
  };

  return (
    <Action
      title="Follow"
      color="primary"
      isLoading={isLoading}
      onPress={handleFollow}
      Icon={UserPlusIcon}
    />
  );
}

export default FollowAction;
