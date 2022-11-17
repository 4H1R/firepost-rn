import { useMutation } from '@tanstack/react-query';

import { IAuthUser } from 'interfaces';
import axios from 'libs/axios';

export interface IRegisterDto {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface ILoginResponse {
  user: IAuthUser;
  accessToken: string;
  refreshToken: string;
}

async function register(data: IRegisterDto) {
  const resp = await axios.post<ILoginResponse>('/auth/register', data);
  return resp.data;
}

function useRegister() {
  return useMutation(register);
}

export default useRegister;
