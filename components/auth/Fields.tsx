import React from 'react';
import { View } from 'react-native';
import { useFormikContext } from 'formik';

import { TAuthField } from 'types';
import TextInput from './TextInput';
import ErrorMessage from './ErrorMessage';
import Button from 'shared/common/Button';

type FieldsProps<T> = {
  fields: TAuthField<T>[];
  buttonText: string;
  isLoading?: boolean;
};

function Fields<T extends Record<string, any>>({
  fields,
  buttonText,
  isLoading,
}: FieldsProps<T>) {
  const { errors, handleBlur, handleChange, handleSubmit, values, touched } =
    useFormikContext<T>();

  const hasError = (name: string) =>
    (touched[name] && errors[name] !== undefined) || false;

  return (
    <View>
      {fields.map(({ name, fieldProps }) => (
        <View key={name}>
          <TextInput
            {...fieldProps}
            hasError={hasError(name)}
            onChangeText={handleChange(name)}
            onBlur={handleBlur(name)}
            value={values[name]}
          />
          <ErrorMessage name={name} />
        </View>
      ))}
      <Button isLoading={isLoading} onPress={handleSubmit}>
        {buttonText}
      </Button>
    </View>
  );
}

export default Fields;
