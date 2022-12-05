import { useInfiniteQuery } from '@tanstack/react-query';

import { IPaginate, IPaginateParams, IMessage } from 'interfaces';
import { getNextPageParam } from 'utils';
import axios from 'libs/axios';

interface IShowMessageDto extends IPaginateParams {
  username: string;
}

async function show(dto: IShowMessageDto) {
  const { username, ...params } = dto;
  const resp = await axios.get<IPaginate<IMessage>>(`/users/${username}/messages`, { params });
  return resp.data;
}

function useGetUserMessages(params: IShowMessageDto) {
  const { username, ...rest } = params;

  return useInfiniteQuery(
    ['messages', username, rest],
    ({ pageParam }) => show({ ...params, page: pageParam }),
    { getNextPageParam }
  );
}

export default useGetUserMessages;
