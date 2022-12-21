import { useQueryClient } from '@tanstack/react-query';

import { removeAccessToken } from 'utils/auth';
import useAuthUser from 'stores/authStore';

function useLogoutCleanUp() {
  const queryClient = useQueryClient();
  const clearUser = useAuthUser((state) => state.clearUser);

  return () => {
    queryClient.clear();
    removeAccessToken();
    clearUser();
  };
}

export default useLogoutCleanUp;
