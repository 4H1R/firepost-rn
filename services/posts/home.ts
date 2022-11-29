import { useInfiniteQuery } from '@tanstack/react-query';

import { IPaginate, IPaginateParams, IPostWithUser } from 'interfaces';
import { getNextPageParam } from 'utils';
import axios from 'libs/axios';

async function findAll(params?: IPaginateParams) {
  const resp = await axios.get<IPaginate<IPostWithUser>>('/auth/posts', {
    params,
  });
  return resp.data;
}

function useGetHomePosts() {
  return useInfiniteQuery(['posts', 'home'], ({ pageParam }) => findAll({ page: pageParam }), {
    getNextPageParam,
  });
}

export default useGetHomePosts;
