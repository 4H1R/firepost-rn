import { useInfiniteQuery } from '@tanstack/react-query';

import { IPaginate, IPaginateParams, IPost } from 'interfaces';
import { getNextPageParam } from 'utils';
import axios from 'libs/axios';

async function findAll(params?: IPaginateParams) {
  const resp = await axios.get<IPaginate<IPost>>('/posts', {
    params,
  });
  return resp.data;
}

function useGetPosts() {
  return useInfiniteQuery(['posts'], ({ pageParam }) => findAll({ page: pageParam }), {
    getNextPageParam,
  });
}

export default useGetPosts;
