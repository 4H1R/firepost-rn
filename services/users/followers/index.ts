import { useInfiniteQuery } from '@tanstack/react-query';

import { IPaginate, IPaginateParams, IUser } from 'interfaces';
import { getNextPageParam } from 'utils';
import axios from 'libs/axios';

async function followers(username: string, params: IPaginateParams) {
  const resp = await axios.get<IPaginate<IUser>>(`/users/${username}/followers`, { params });
  return resp.data;
}

function useGetUserFollowers(
  username: string,
  params: IPaginateParams,
  options?: { enabled: boolean }
) {
  return useInfiniteQuery(
    ['users', username, 'followers', params],
    ({ pageParam }) => followers(username, { ...params, page: pageParam }),
    { ...options, getNextPageParam }
  );
}

export default useGetUserFollowers;
