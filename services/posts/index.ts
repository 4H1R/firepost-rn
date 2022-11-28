import { useInfiniteQuery } from '@tanstack/react-query';

import { IPaginate, IPaginateParams, IPost } from 'interfaces';
import axios from 'libs/axios';

interface IPostFindAllDto extends Omit<IPaginateParams, 'query'> {
  userId?: number;
}

async function findAll(params?: IPostFindAllDto) {
  const resp = await axios.get<IPaginate<IPost>>('/posts', {
    params,
  });
  return resp.data;
}

function useGetPosts(params?: IPostFindAllDto, options?: { enabled: boolean }) {
  return useInfiniteQuery(
    ['posts', params],
    ({ pageParam }) => findAll({ ...params, page: pageParam }),
    { ...options, getNextPageParam: (lastPage) => lastPage.meta.next }
  );
}

export default useGetPosts;
