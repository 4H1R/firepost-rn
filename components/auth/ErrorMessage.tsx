import React from 'react';
import { Text } from 'react-native';

import tw from 'libs/tailwind';
import { useFormikContext } from 'formik';

type ErrorMessageProps = {
  name: string;
};

function ErrorMessage({ name }: ErrorMessageProps) {
  const { errors, touched } = useFormikContext<Record<string, string>>();
  const hasError = (touched[name] && errors[name] !== undefined) || false;

  if (!hasError) return null;

  return (
    <Text style={tw`text-danger-600 font-primary mt-2`}>{errors[name]}</Text>
  );
}

export default ErrorMessage;
