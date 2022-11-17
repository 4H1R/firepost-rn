import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import tw from 'libs/tailwind';

type LinkProps = {
  text: string;
  linkText: string;
  navigateTo: string;
};

function Link({ text, linkText, navigateTo }: LinkProps) {
  const navigation = useNavigation();

  return (
    <View style={tw`flex-row mt-4 items-center justify-center flex-wrap`}>
      <Text style={tw`text-base font-primary text-secondary-600`}>{text}</Text>
      <TouchableWithoutFeedback onPress={() => navigation.navigate(navigateTo)}>
        <Text style={tw`text-base font-primary text-primary-600 ml-2`}>
          {linkText}
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

export default Link;
