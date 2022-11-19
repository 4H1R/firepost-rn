import React from 'react';

import axios from 'libs/axios';
import useAuthUser from 'stores/authStore';

type AuthProps = {
  children: JSX.Element;
};

function Auth({ children }: AuthProps) {
  const accessToken = useAuthUser((state) => state.accessToken);

  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

  return children;
}

export default Auth;
