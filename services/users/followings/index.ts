import { useInfiniteQuery } from '@tanstack/react-query';

import { IPaginate, IPaginateParams, IUser } from 'interfaces';
import axios from 'libs/axios';
import { IFollowersParams } from '../followers';

async function followings(username: string, params: IPaginateParams) {
  const resp = await axios.get<IPaginate<IUser>>(`/users/${username}/followings`, {
    params,
  });
  return resp.data;
}

function useGetUserFollowings(username: string, params: IFollowersParams) {
  const { query, enabled } = params;

  return useInfiniteQuery(
    ['users', username, 'followings', { query }],
    ({ pageParam }) => followings(username, { page: pageParam, query }),
    {
      enabled,
      getNextPageParam: (lastPage) => lastPage.meta.next,
    }
  );
}

export default useGetUserFollowings;
