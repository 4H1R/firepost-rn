import { useInfiniteQuery } from '@tanstack/react-query';

import { IPaginate, IPaginateParams, IUser } from 'interfaces';
import axios from 'libs/axios';

async function followings(username: string, params: IPaginateParams) {
  const resp = await axios.get<IPaginate<IUser>>(`/users/${username}/followings`, {
    params,
  });
  return resp.data;
}

function useGetUserFollowings(username: string, enabled: boolean) {
  return useInfiniteQuery(
    ['users', username, 'followings'],
    ({ pageParam }) => followings(username, { page: pageParam }),
    {
      enabled,
      getNextPageParam: (lastPage) => lastPage.meta.next,
    }
  );
}

export default useGetUserFollowings;
