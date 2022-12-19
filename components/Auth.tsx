import React, { useEffect } from 'react';

import axios from 'libs/axios';
import useAuthUser from 'stores/authStore';
import { getAccessToken } from 'utils/auth';
import useGetMe from 'services/users/me';

type AuthProps = {
  children: JSX.Element;
};

function Auth({ children }: AuthProps) {
  const accessToken = useAuthUser((state) => state.accessToken);
  const setAuth = useAuthUser((state) => state.setAuth);
  useGetMe();

  useEffect(() => {
    const setSavedAccessToken = async () => {
      const accessToken = await getAccessToken();
      setAuth({ accessToken });
    };
    setSavedAccessToken();
  }, []);

  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

  return children;
}

export default Auth;
