import React from 'react';
import {
  TextInput as TextInputMain,
  TextInputProps as TextInputMainProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { SvgProps } from 'react-native-svg';

import tw from 'libs/tailwind';

export interface TextInputProps extends TextInputMainProps {
  Icon?: (props: SvgProps) => JSX.Element;
  hasError?: boolean;
  containerStyle?: ViewStyle;
  textInputStyle?: TextStyle;
  iconStyle?: ViewStyle;
}

function TextInput({
  Icon,
  iconStyle,
  containerStyle,
  textInputStyle,
  hasError = false,
  ...props
}: TextInputProps) {
  return (
    <View
      style={tw.style(
        'flex-row items-center justify-center bg-secondary-200 rounded-lg mt-4 p-2',
        {
          'border border-danger-600': hasError,
        },
        containerStyle
      )}
    >
      <TextInputMain
        placeholderTextColor={tw.color('secondary-400')}
        {...props}
        style={tw.style('flex-1 flex text-secondary-600 font-primary', textInputStyle)}
      />
      {Icon && <Icon strokeWidth={2} style={tw.style('w-5 h-5 text-secondary-600', iconStyle)} />}
    </View>
  );
}

export default TextInput;
