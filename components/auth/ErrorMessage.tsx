import React from 'react';
import { Text } from 'react-native';

import tw from 'libs/tailwind';

type ErrorMessageProps = {
  error: string | undefined;
};

function ErrorMessage({ error }: ErrorMessageProps) {
  if (!error) return null;

  return <Text style={tw`text-danger-600 font-primary mt-2`}>{error}</Text>;
}

export default ErrorMessage;
