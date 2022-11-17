import { useMutation } from '@tanstack/react-query';

import { IAuthUser } from 'interfaces';
import axios from 'libs/axios';

export interface ILoginDto {
  email: string;
  password: string;
}

export interface ILoginResponse {
  user: IAuthUser;
  accessToken: string;
  refreshToken: string;
}

async function login(data: ILoginDto) {
  const resp = await axios.post<ILoginResponse>('/auth/access-token', data);
  return resp.data;
}

function useLogin() {
  return useMutation(login);
}

export default useLogin;
