import React from 'react';
import { ArrowLeftOnRectangleIcon } from 'react-native-heroicons/outline';
import { useQueryClient } from '@tanstack/react-query';

import { removeRefreshToken } from 'utils/auth';
import { useDoubleClick } from 'hooks';
import useAuthUser from 'stores/authStore';
import Action from './Action';

function LogoutAction() {
  const { isDoubledClicked, handleDoubleClickToggle } = useDoubleClick();
  const queryClient = useQueryClient();
  const clearUser = useAuthUser((state) => state.clearUser);

  const handleLogout = () => {
    removeRefreshToken();
    queryClient.clear();
    clearUser();
  };

  return (
    <Action
      title={isDoubledClicked ? 'Are you Sure?' : 'Logout'}
      color="danger"
      onPress={isDoubledClicked ? handleLogout : handleDoubleClickToggle}
      Icon={ArrowLeftOnRectangleIcon}
    />
  );
}

export default LogoutAction;
