import React from 'react';
import { ArrowLeftOnRectangleIcon } from 'react-native-heroicons/outline';

import Action from './Action';
import useLogout from 'services/auth/logout';

function LogoutAction() {
  const { mutate: logout } = useLogout();

  return (
    <Action
      checkForDoubleClick
      title="Logout"
      color="danger"
      onPress={logout}
      Icon={ArrowLeftOnRectangleIcon}
    />
  );
}

export default LogoutAction;
