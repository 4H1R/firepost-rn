import { useInfiniteQuery } from '@tanstack/react-query';

import { IPaginate, IPaginateParams, IUser } from 'interfaces';
import axios from 'libs/axios';

async function followers(username: string, params: IPaginateParams) {
  const resp = await axios.get<IPaginate<IUser>>(`/users/${username}/followers`, {
    params,
  });
  return resp.data;
}

export interface IFollowersParams extends IPaginateParams {
  enabled: boolean;
}

function useGetUserFollowers(username: string, params: IFollowersParams) {
  const { query, enabled } = params;

  return useInfiniteQuery(
    ['users', username, 'followers', { query }],
    ({ pageParam }) => followers(username, { page: pageParam, query: query }),
    {
      enabled,
      getNextPageParam: (lastPage) => lastPage.meta.next,
    }
  );
}

export default useGetUserFollowers;
