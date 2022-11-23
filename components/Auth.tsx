import React, { useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

import axios from 'libs/axios';
import useAuthUser from 'stores/authStore';
import useRefreshToken from 'services/auth/refresh';

async function getRefreshToken() {
  return await SecureStore.getItemAsync('refreshToken');
}

async function setRefreshToken(refresh: string) {
  return await SecureStore.setItemAsync('refreshToken', refresh);
}

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
