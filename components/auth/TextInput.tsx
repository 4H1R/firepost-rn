import React from 'react';
import {
  TextInput as TextInputMain,
  TextInputProps as TextInputMainProps,
  View,
} from 'react-native';
import { SvgProps } from 'react-native-svg';

import tw from 'libs/tailwind';

export interface TextInputProps extends TextInputMainProps {
  Icon: (props: SvgProps) => JSX.Element;
  hasError?: boolean;
}

function TextInput({ Icon, hasError = false, ...props }: TextInputProps) {
  return (
    <View
      style={tw.style('flex-row items-center justify-center bg-secondary-200 rounded-lg mt-4 p-2', {
        'border border-danger-600': hasError,
      })}
    >
      <TextInputMain
        placeholderTextColor={tw.color('secondary-600')}
        {...props}
        style={tw.style('flex-1 text-secondary-600 font-primary')}
      />
      <Icon strokeWidth={2} style={tw`w-5 h-5 text-secondary-600`} />
    </View>
  );
}

export default TextInput;
