import React from 'react';
import { ButtonProps, Text, TextStyle, View, ViewStyle } from 'react-native';
import { InformationCircleIcon } from 'react-native-heroicons/outline';

import tw from 'libs/tailwind';
import Button from 'shared/common/Button';

type EmptyProps = {
  title: string;
  description?: string;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  descriptionStyle?: TextStyle;
  Action?: React.ReactNode;
};

function Empty({
  title,
  description,
  containerStyle,
  titleStyle,
  descriptionStyle,
  Action,
}: EmptyProps) {
  return (
    <View
      style={tw.style(
        'flex-1 items-center justify-center py-8 px-4 border rounded-lg border-secondary-300 mt-2',
        containerStyle
      )}
    >
      <View style={tw`bg-secondary-200 rounded-full p-1`}>
        <InformationCircleIcon size={30} style={tw`text-primary-600`} />
      </View>
      <Text
        style={tw.style(
          'font-primary-semi text-secondary-900 text-base mt-2 text-center',
          titleStyle
        )}
      >
        {title}
      </Text>
      <Text
        style={tw.style(
          'font-primary text-sm mt-2 text-secondary-400 text-center',
          descriptionStyle
        )}
      >
        {description}
      </Text>
      {Action}
    </View>
  );
}

export default Empty;
