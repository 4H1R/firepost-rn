import React from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { UserMinusIcon } from 'react-native-heroicons/outline';

import { useDoubleClick } from 'hooks';
import Action from './Action';
import useUnFollowUser from 'services/users/followers/delete';

type UnFollowActionProps = {
  username: string;
};

function UnFollowAction({ username }: UnFollowActionProps) {
  const { isDoubledClicked, handleDoubleClickToggle } = useDoubleClick();
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
      onPress={isDoubledClicked ? handleUnFollow : handleDoubleClickToggle}
      title={isDoubledClicked ? 'Are you Sure ?' : 'Un Follow'}
      Icon={UserMinusIcon}
      isLoading={isLoading}
      color="secondary"
    />
  );
}

export default UnFollowAction;
