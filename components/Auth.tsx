import React, { useEffect } from 'react';

import { getRefreshToken, setRefreshToken } from 'utils/auth';
import axios from 'libs/axios';
import useAuthUser from 'stores/authStore';
import useRefreshToken from 'services/auth/refresh';

type AuthProps = {
  children: JSX.Element;
};

function Auth({ children }: AuthProps) {
  const accessToken = useAuthUser((state) => state.accessToken);
  const refreshToken = useAuthUser((state) => state.refreshToken);

  const { mutate: getNewAccessToken } = useRefreshToken();

  useEffect(() => {
    getRefreshToken().then((refresh) => {
      if (!refresh) return;
      getNewAccessToken({ refresh });
    });
  }, []);

  useEffect(() => {
    if (!refreshToken) return;
    setRefreshToken(refreshToken);
  }, [refreshToken]);

  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

  return children;
}

export default Auth;
