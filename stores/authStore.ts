import { IAuthUser } from 'interfaces';
import create from 'zustand';

interface IUserData {
  user: IAuthUser | null;
  accessToken: string | null;
}

interface IAuthStore extends IUserData {
  clearUser: () => void;
  setAuth: (data: Partial<IUserData>) => void;
  setUser: (data: Partial<IAuthUser>) => void;
}

const initialValues = {
  user: null,
  accessToken: null,
  refreshToken: null,
};

const useAuthUser = create<IAuthStore>((set) => ({
  ...initialValues,
  clearUser: () => set({ ...initialValues }),
  setAuth: (user) => set({ ...user }),
  setUser: (user) => set((state) => ({ user: { ...state.user!, ...user } })),
}));

export default useAuthUser;
