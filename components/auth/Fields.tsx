import React from 'react';
import { View } from 'react-native';
import { useFormikContext } from 'formik';

import { IField } from 'interfaces';
import TextInput, { TextInputProps } from './TextInput';
import ErrorMessage from './ErrorMessage';
import Button from './Button';

type FieldsProps = {
  fields: IField<TextInputProps>[];
  buttonText: string;
};

function Fields({ fields, buttonText }: FieldsProps) {
  const { errors, handleBlur, handleChange, handleSubmit, values } =
    useFormikContext<Record<string, string>>();

  return (
    <View>
      {fields.map(({ name, fieldProps }) => (
        <View key={name}>
          <TextInput
            {...fieldProps}
            hasError={!!errors[name]}
            onChangeText={handleChange(name)}
            onBlur={handleBlur(name)}
            value={values[name]}
          />
          <ErrorMessage error={errors[name]} />
        </View>
      ))}
      <Button onPress={handleSubmit}>{buttonText}</Button>
    </View>
  );
}

export default Fields;
