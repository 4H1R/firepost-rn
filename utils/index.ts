import { IField } from 'interfaces';

export function fieldsToInitialValues<T>(fields: IField<unknown>[]) {
  return fields.reduce((curr, field) => {
    curr[field.name] = '';
    return curr;
  }, {} as Record<string, string>);
}
