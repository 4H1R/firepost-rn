import { useMutation } from '@tanstack/react-query';

import axios from 'libs/axios';

async function unFollow(username: string) {
  const resp = await axios.delete(`/users/${username}/followers`);
  return resp.data;
}

function useUnFollowUser() {
  return useMutation(unFollow);
}

export default useUnFollowUser;
