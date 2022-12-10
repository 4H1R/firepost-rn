import { useQuery } from '@tanstack/react-query';

import { IPostFull } from 'interfaces';
import axios from 'libs/axios';

async function post(id: string) {
  const resp = await axios.get<IPostFull>(`/posts/${id}`);
  return resp.data;
}

function useGetPost(id: string) {
  return useQuery(['posts', id], () => post(id));
}

export default useGetPost;
