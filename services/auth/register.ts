import { useMutation } from '@tanstack/react-query';

import { IAuthResponse } from 'interfaces';
import axios from 'libs/axios';

export interface IRegisterDto {
  name: string;
  username: string;
  email: string;
  password: string;
  deviceName: string;
}

async function register(data: IRegisterDto) {
  const resp = await axios.post<IAuthResponse>('/auth/register', data);
  return resp.data;
}

function useRegister() {
  return useMutation(register);
}

export default useRegister;
