import { useInfiniteQuery } from '@tanstack/react-query';

import { IPaginate, IPaginateParams, IUser } from 'interfaces';
import { getNextPageParam } from 'utils';
import axios from 'libs/axios';

async function findAll(params?: IPaginateParams) {
  const resp = await axios.get<IPaginate<IUser>>('/messages', { params });
  return resp.data;
}

function useGetMessagedUsers(params: IPaginateParams) {
  return useInfiniteQuery(
    ['messages', params],
    ({ pageParam }) => findAll({ ...params, page: pageParam }),
    { getNextPageParam }
  );
}

export default useGetMessagedUsers;
