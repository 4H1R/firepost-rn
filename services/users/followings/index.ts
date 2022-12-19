import { useInfiniteQuery } from '@tanstack/react-query';

import { IPaginate, IPaginateParams, IUser } from 'interfaces';
import axios from 'libs/axios';
import { getNextPageParam } from 'utils';

async function followings(username: string, params: IPaginateParams) {
  const resp = await axios.get<IPaginate<IUser>>(`/users/${username}/followings`, { params });
  return resp.data;
}

function useGetUserFollowings(
  username: string,
  params: IPaginateParams,
  options?: { enabled: boolean }
) {
  return useInfiniteQuery(
    ['users', username, 'followings', params],
    ({ pageParam }) => followings(username, { ...params, page: pageParam }),
    { ...options, getNextPageParam }
  );
}

export default useGetUserFollowings;
