import React from 'react';
import {
  ActivityIndicator,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

import tw from 'libs/tailwind';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  onPress?: () => void;
  isLoading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

function Button({ text, onPress, isLoading = false, style, textStyle }: ButtonProps) {
  return (
    <TouchableOpacity
      disabled={isLoading}
      onPress={onPress}
      activeOpacity={0.6}
      style={tw.style(
        'flex-row items-center justify-center py-3 w-full bg-primary-600 rounded-lg mt-4',
        { 'opacity-50': isLoading },
        style
      )}
    >
      {isLoading ? (
        <ActivityIndicator color={tw.color('white')} size="large" style={tw`mr-2`} />
      ) : (
        <Text style={tw.style('text-white text-xl font-primary-semi', textStyle)}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}

export default Button;
