import React from 'react';
import { ArrowLeftOnRectangleIcon } from 'react-native-heroicons/outline';

import { useDoubleClick } from 'hooks';
import Action from './Action';
import useLogout from 'services/auth/logout';

function LogoutAction() {
  const { isDoubledClicked, handleDoubleClickToggle } = useDoubleClick();
  const { mutate: logout } = useLogout();

  return (
    <Action
      title={isDoubledClicked ? 'Are you Sure?' : 'Logout'}
      color="danger"
      onPress={isDoubledClicked ? logout : handleDoubleClickToggle}
      Icon={ArrowLeftOnRectangleIcon}
    />
  );
}

export default LogoutAction;
