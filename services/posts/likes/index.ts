import { useInfiniteQuery } from '@tanstack/react-query';

import { IPaginate, IPaginateParams, IUser } from 'interfaces';
import { getNextPageParam } from 'utils';
import axios from 'libs/axios';

async function index(id: string, params: IPaginateParams) {
  const resp = await axios.get<IPaginate<IUser>>(`/posts/${id}/likes`, { params });
  return resp.data;
}

function useGetPostLikers(id: string, params: IPaginateParams, options?: { enabled: boolean }) {
  return useInfiniteQuery(
    ['posts', id, 'followers', params],
    ({ pageParam }) => index(id, { ...params, page: pageParam }),
    { ...options, getNextPageParam }
  );
}

export default useGetPostLikers;
