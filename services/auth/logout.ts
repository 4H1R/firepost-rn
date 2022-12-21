import { useMutation } from '@tanstack/react-query';
import { useLogoutCleanUp } from 'hooks';

import axios from 'libs/axios';

async function logout() {
  const resp = await axios.post('/auth/logout');
  return resp.data;
}

function useLogout() {
  const cleanUp = useLogoutCleanUp();

  return useMutation(logout, {
    onSuccess: cleanUp,
  });
}

export default useLogout;
