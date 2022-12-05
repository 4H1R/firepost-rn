import { useMutation } from '@tanstack/react-query';

import axios from 'libs/axios';

interface ICreateMessageDto {
  username: string;
  text: string;
}

async function create(data: ICreateMessageDto) {
  const { username, ...rest } = data;
  const resp = await axios.post(`/users/${username}/messages`, rest);
  return resp.data;
}

function useCreateMessage() {
  return useMutation(create);
}

export default useCreateMessage;
