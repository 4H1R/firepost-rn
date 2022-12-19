import { useMutation, useQueryClient } from '@tanstack/react-query';

import { removeAccessToken } from 'utils/auth';
import axios from 'libs/axios';
import useAuthUser from 'stores/authStore';

async function logout() {
  const resp = await axios.post('/auth/logout');
  return resp.data;
}

function useLogout() {
  const queryClient = useQueryClient();
  const clearUser = useAuthUser((state) => state.clearUser);

  return useMutation(logout, {
    onSuccess: () => {
      queryClient.clear();
      removeAccessToken();
      clearUser();
    },
  });
}

export default useLogout;
