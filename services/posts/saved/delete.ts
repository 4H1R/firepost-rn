import { useMutation } from '@tanstack/react-query';

import axios from 'libs/axios';

async function unSave(post: string) {
  const resp = await axios.delete(`/posts/${post}/saves`);
  return resp.data;
}

function useUnSavePost() {
  return useMutation(unSave);
}

export default useUnSavePost;
