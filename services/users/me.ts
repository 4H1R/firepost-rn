import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { IUser } from 'interfaces';
import axios from 'libs/axios';
import useLogout from 'services/auth/logout';
import useAuthUser from 'stores/authStore';

async function me() {
  const resp = await axios.get<IUser>('/users/me');
  return resp.data;
}

function useGetMe() {
  const accessToken = useAuthUser((state) => state.accessToken);
  const setUser = useAuthUser((state) => state.setUser);
  const { mutate: logout } = useLogout();

  return useQuery(['users', 'me'], me, {
    enabled: !!accessToken,
    onSuccess: setUser,
    onError: (e) => {
      if (e instanceof AxiosError) {
        // access token got deleted
        if (e.response?.status === 401) logout();
      }
    },
  });
}

export default useGetMe;
