import { TFieldName } from 'types';
import { IAuthUser } from './models';

export interface IField<Props, Name = string> {
  fieldProps: Props;
  name: TFieldName<Name>;
}

export interface IAuthResponse {
  user: IAuthUser;
  accessToken: string;
}

export interface IPaginate<T> {
  data: T[];
  meta: {
    currentPage: number;
    lastPage: number;
    next: null | number;
    perPage: number;
    prev: null | number;
    total: number;
  };
}

export interface IPaginateParams {
  page?: number;
  query?: string;
}

export * from './models';
export * from './errors';
