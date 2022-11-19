import { useQuery } from '@tanstack/react-query';

import { IUser } from 'interfaces';
import axios from 'libs/axios';

async function user(username: string) {
  const resp = await axios.get<IUser>(`/users/${username}`);
  return resp.data;
}

function useGetUser(username: string) {
  return useQuery(['users', username], () => user(username));
}

export default useGetUser;
