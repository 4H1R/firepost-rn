import { useMutation } from '@tanstack/react-query';

import { IAuthResponse } from 'interfaces';
import axios from 'libs/axios';
import useAuthUser from 'stores/authStore';

export interface IRefreshDto {
  refresh: string;
}

async function refresh(data: IRefreshDto) {
  const resp = await axios.post<IAuthResponse>('/auth/refresh', data);
  return resp.data;
}

function useRefreshToken() {
  const setUser = useAuthUser((state) => state.setUser);

  return useMutation(refresh, {
    onSuccess: setUser,
  });
}

export default useRefreshToken;
