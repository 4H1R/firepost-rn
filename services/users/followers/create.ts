import { useMutation } from '@tanstack/react-query';

import axios from 'libs/axios';

async function follow(username: string) {
  const resp = await axios.post(`/users/${username}/followers`);
  return resp.data;
}

function useFollowUser() {
  return useMutation(follow);
}

export default useFollowUser;
