import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import tw from 'libs/tailwind';

type NumberDataProps = {
  count: number;
  title: string;
  onPress?: () => void;
};

function NumberData({ count, title, onPress }: NumberDataProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={tw`flex items-center justify-center ml-6`}>
        <Text style={tw`font-primary-medium text-xl text-secondary-900`}>{count}</Text>
        <Text style={tw`font-primary-medium text-sm text-secondary-400`}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default NumberData;
