import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';

import tw from 'libs/tailwind';

type ButtonProps = {
  text: string;
  onPress?: () => void;
  isLoading?: boolean;
};

function Button({ text, onPress, isLoading = false }: ButtonProps) {
  return (
    <TouchableOpacity
      disabled={isLoading}
      onPress={onPress}
      activeOpacity={0.6}
      style={tw.style(
        'flex-row items-center justify-center py-3 w-full bg-primary-600 rounded-lg mt-4',
        { 'opacity-50': isLoading }
      )}
    >
      {isLoading ? (
        <ActivityIndicator color={tw.color('white')} size="large" style={tw`mr-2`} />
      ) : (
        <Text style={tw`text-white text-xl font-primary-semi`}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}

export default Button;
