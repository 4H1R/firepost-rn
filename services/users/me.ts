import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { useLogoutCleanUp } from 'hooks';
import { IUser } from 'interfaces';
import axios from 'libs/axios';
import useAuthUser from 'stores/authStore';

async function me() {
  const resp = await axios.get<IUser>('/users/me');
  return resp.data;
}

function useGetMe() {
  const accessToken = useAuthUser((state) => state.accessToken);
  const setUser = useAuthUser((state) => state.setUser);
  const cleanUp = useLogoutCleanUp();

  return useQuery(['users', 'me'], me, {
    enabled: !!accessToken,
    onSuccess: setUser,
    onError: (e) => {
      if (e instanceof AxiosError) {
        // access token got deleted
        if (e.response?.status === 401) cleanUp();
      }
    },
  });
}

export default useGetMe;
