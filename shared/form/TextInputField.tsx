import React from 'react';
import { useFormikContext } from 'formik';

import { TTextInputField } from 'types';
import ErrorMessage from 'shared/form/ErrorMessage';
import TextInput from './TextInput';

function TextInputField<T extends Record<string, any>>({ name, fieldProps }: TTextInputField<T>) {
  const { errors, handleBlur, handleChange, values, touched } = useFormikContext<T>();

  const hasError = (name: string) => (touched[name] && errors[name] !== undefined) || false;

  return (
    <>
      <TextInput
        {...fieldProps}
        hasError={hasError(name)}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        value={values[name]}
      />
      <ErrorMessage name={name} />
    </>
  );
}

export default TextInputField;
