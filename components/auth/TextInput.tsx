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
    <View style={tw`flex-row items-center justify-center`}>
      <TextInputMain
        {...props}
        style={tw.style(
          'p-2 flex-1 w-full bg-secondary-200 rounded-lg mt-4 font-primary',
          { 'border border-danger-500': hasError }
        )}
      />
      <Icon
        strokeWidth={2}
        style={tw`w-5 h-5 text-secondary-500/70 absolute right-0 bottom-2 mr-2`}
      />
    </View>
  );
}

export default TextInput;
