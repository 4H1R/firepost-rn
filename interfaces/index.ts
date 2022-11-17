import { TFieldName } from 'types';

export interface IField<T, K = string> {
  name: TFieldName<K>;
  fieldProps: T;
}

export * from './models';
export * from './errors';
