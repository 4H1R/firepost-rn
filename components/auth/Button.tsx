import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import tw from 'libs/tailwind';

type ButtonProps = {
  children: string;
  onPress?: () => void;
};

function Button({ children, onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={tw`py-3 w-full bg-primary-600 rounded-lg mt-4`}
    >
      <Text style={tw`text-white mx-auto text-xl font-primary-semi`}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;
