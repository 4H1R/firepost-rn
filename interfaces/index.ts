import { TFieldName } from 'types';
import { IAuthUser } from './models';

export interface IField<T, K = string> {
  name: TFieldName<K>;
  fieldProps: T;
}

export interface IAuthResponse {
  user: IAuthUser;
  accessToken: string;
  refreshToken: string;
}

export * from './models';
export * from './errors';
