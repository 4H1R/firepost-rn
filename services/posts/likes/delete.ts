import { useMutation } from '@tanstack/react-query';

import axios from 'libs/axios';

async function unLike(post: string) {
  const resp = await axios.delete(`/posts/${post}/likes`);
  return resp.data;
}

function useUnLikePost() {
  return useMutation(unLike);
}

export default useUnLikePost;
