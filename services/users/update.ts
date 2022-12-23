import { useMutation } from '@tanstack/react-query';
import { IAuthUser } from 'interfaces';

import axios from 'libs/axios';

export interface IUpdateUserDto {
  username: string;
  currentUsername: string;
  name: string;
  bio: string | null;
  website: string | null;
  image: string | null;
}

async function update(data: IUpdateUserDto) {
  const formData = new FormData();
  const { currentUsername, ...rest } = data;

  for (const [key, value] of Object.entries(rest)) {
    if (value !== null) formData.append(key, value);
  }

  const resp = await axios.post<IAuthUser>(`/users/${currentUsername}`, formData, {
    headers: { 'Content-type': 'multipart/form-data' },
  });
  return resp.data;
}

function useUpdateUser() {
  return useMutation(update);
}

export default useUpdateUser;
