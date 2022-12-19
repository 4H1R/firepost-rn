import { useMutation } from '@tanstack/react-query';

import axios from 'libs/axios';

async function like(post: string) {
  const resp = await axios.post(`/posts/${post}/likes`);
  return resp.data;
}

function useLikePost() {
  return useMutation(like);
}

export default useLikePost;
