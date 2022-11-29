import { useInfiniteQuery } from '@tanstack/react-query';

import { IPaginate, IPaginateParams, IPost } from 'interfaces';
import { getNextPageParam } from 'utils';
import axios from 'libs/axios';

interface IUserPostsDto extends IPaginateParams {
  username: string;
}

async function findAll(dto: IUserPostsDto) {
  const { username, ...params } = dto;
  const resp = await axios.get<IPaginate<IPost>>(`/users/${username}/posts`, { params });
  return resp.data;
}

function useGetUserPosts(username: string) {
  return useInfiniteQuery(
    ['posts', username],
    ({ pageParam }) => findAll({ username, page: pageParam }),
    { getNextPageParam }
  );
}

export default useGetUserPosts;
