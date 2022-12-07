import { useMutation } from '@tanstack/react-query';
import { IAuthUser } from 'interfaces';

import axios from 'libs/axios';

export interface IUpdateUserDto {
  username: string;
  name: string;
  bio: string | null;
}

async function update(data: IUpdateUserDto) {
  const resp = await axios.patch<IAuthUser>(`/users/${data.username}`, data);
  return resp.data;
}

function useUpdateUser() {
  return useMutation(update);
}

export default useUpdateUser;
