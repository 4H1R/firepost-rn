import { useInfiniteQuery } from '@tanstack/react-query';

import { IPaginate, IPaginateParams, IUser } from 'interfaces';
import axios from 'libs/axios';

async function followers(username: string, params: IPaginateParams) {
  const resp = await axios.get<IPaginate<IUser>>(`/users/${username}/followers`, {
    params,
  });
  return resp.data;
}

function useGetUserFollowers(username: string, enabled: boolean) {
  return useInfiniteQuery(
    ['users', username, 'followers'],
    ({ pageParam }) => followers(username, { page: pageParam }),
    {
      enabled,
      getNextPageParam: (lastPage) => lastPage.meta.next,
    }
  );
}

export default useGetUserFollowers;
