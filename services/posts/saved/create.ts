import { useMutation } from '@tanstack/react-query';

import axios from 'libs/axios';

async function save(post: string) {
  const resp = await axios.post(`/posts/${post}/saved`);
  return resp.data;
}

function useSavePost() {
  return useMutation(save);
}

export default useSavePost;
