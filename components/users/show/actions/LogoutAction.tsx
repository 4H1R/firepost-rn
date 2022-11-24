import React, { useState } from 'react';
import { ArrowLeftOnRectangleIcon } from 'react-native-heroicons/outline';

import { removeRefreshToken } from 'utils/auth';
import useAuthUser from 'stores/authStore';
import Action from './Action';

function LogoutAction() {
  const [isDoubledClicked, setIsDoubledClicked] = useState(false);
  const clearUser = useAuthUser((state) => state.clearUser);

  const handleToggle = () => setIsDoubledClicked(true);
  const handleLogout = () => {
    removeRefreshToken();
    clearUser();
  };

  return (
    <Action
      title={isDoubledClicked ? 'Are you Sure?' : 'Logout'}
      onPress={isDoubledClicked ? handleLogout : handleToggle}
      Icon={ArrowLeftOnRectangleIcon}
      color="danger"
    />
  );
}

export default LogoutAction;
