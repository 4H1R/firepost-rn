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
  website: string | null;
  isVerified: boolean;
}

export interface IAuthUser extends IUser {
  email: string;
}

export interface IUserProfile extends IUser {
  postsCount: number;
  followingsCount: number;
  followersCount: number;
  isFollowed: boolean;
}
