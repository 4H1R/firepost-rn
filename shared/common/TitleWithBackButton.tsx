import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';

import tw from 'libs/tailwind';
import Title from './Title';

type TitleWithBackButtonProps = {
  onGoBack: () => void;
  title: string;
};

function TitleWithBackButton({ onGoBack, title }: TitleWithBackButtonProps) {
  return (
    <View style={tw`flex-row items-center justify-center`}>
      <TouchableHighlight
        underlayColor={tw.color('secondary-200')}
        style={tw`absolute left-0 rounded-full`}
        onPress={onGoBack}
      >
        <ChevronLeftIcon strokeWidth={2} size={25} style={tw`text-secondary-900`} />
      </TouchableHighlight>
      <Title text={title} />
    </View>
  );
}

export default TitleWithBackButton;
