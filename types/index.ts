import { IField } from 'interfaces';
import { TextInputProps } from 'shared/form/TextInput';

export type TFieldName<T> = T extends object ? keyof T : string;
export type TTextInputField<T = {}> = IField<TextInputProps, T>;

export * from './navigation';
