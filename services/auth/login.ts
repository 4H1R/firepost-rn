import { useMutation } from '@tanstack/react-query';

import { IAuthResponse } from 'interfaces';
import axios from 'libs/axios';

export interface ILoginDto {
  email: string;
  password: string;
  deviceName: string;
}

async function login(data: ILoginDto) {
  const resp = await axios.post<IAuthResponse>('/auth/login', data);
  return resp.data;
}

function useLogin() {
  return useMutation(login);
}

export default useLogin;
