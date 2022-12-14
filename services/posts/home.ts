import { useInfiniteQuery } from '@tanstack/react-query';

import { IPaginate, IPaginateParams, IPostFull } from 'interfaces';
import { getNextPageParam } from 'utils';
import axios from 'libs/axios';

async function findAll(params?: IPaginateParams) {
  const resp = await axios.get<IPaginate<IPostFull>>('/posts/home', {
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
