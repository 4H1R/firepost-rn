import { TextInputProps } from 'components/auth/TextInput';
import { IField } from 'interfaces';

export type TFieldName<T> = T extends object ? keyof T : string;
export type TAuthField<T = {}> = IField<TextInputProps, T>;

export * from './navigation';
