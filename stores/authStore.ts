import { IAuthUser } from 'interfaces';
import create from 'zustand';

interface IUserData {
  user: IAuthUser | null;
  accessToken: string | null;
  refreshToken: string | null;
}

interface IAuthStore extends IUserData {
  clearUser: () => void;
  setUser: (data: Partial<IUserData>) => void;
}

const initialValues = {
  user: null,
  accessToken: null,
  refreshToken: null,
};

const useAuthUser = create<IAuthStore>((set) => ({
  ...initialValues,
  clearUser: () => set({ ...initialValues }),
  setUser: (user) => set({ ...user }),
}));

export default useAuthUser;
