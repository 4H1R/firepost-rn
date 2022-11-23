import React from 'react';
import { TouchableWithoutFeedback, Text, View } from 'react-native';

import tw from 'libs/tailwind';

type NumberDataProps = {
  count: number;
  title: string;
  onPress?: () => void;
};

function NumberData({ count, title, onPress }: NumberDataProps) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={tw`flex items-center justify-center ml-6`}>
        <Text style={tw`font-primary-medium text-xl text-secondary-900`}>{count}</Text>
        <Text style={tw`font-primary-medium text-xs text-secondary-400`}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default NumberData;
