export interface IModel {
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface IUser extends IModel {
  name: string;
  username: string;
  image: string | null;
  bio: string | null;
}

export interface IAuthUser extends IUser {
  email: string;
}
