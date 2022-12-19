import { useInfiniteQuery } from '@tanstack/react-query';

import { IPaginate, IPaginateParams, IPost } from 'interfaces';
import { getNextPageParam } from 'utils';
import axios from 'libs/axios';

async function findAll(params?: IPaginateParams) {
  const resp = await axios.get<IPaginate<IPost>>('/posts/saved', {
    params,
  });
  return resp.data;
}

function useGetSavedPosts() {
  return useInfiniteQuery(['posts', 'saved'], ({ pageParam }) => findAll({ page: pageParam }), {
    getNextPageParam,
  });
}

export default useGetSavedPosts;
