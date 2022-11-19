import { IField } from 'interfaces';
import { TFieldName } from 'types';

export function fieldsToInitialValues<T>(
  fields: IField<unknown, T>[],
  values?: Record<TFieldName<T>, string>
) {
  return fields.reduce((curr, field) => {
    curr[field.name] = (values && values[field.name]) ?? '';
    return curr;
  }, {} as Record<TFieldName<T>, string>);
}

export function splitFirstWordAndRest(text: string) {
  const textSplitted = text.split(' ');
  return [textSplitted[0], textSplitted.slice(1).join(' ')];
}
