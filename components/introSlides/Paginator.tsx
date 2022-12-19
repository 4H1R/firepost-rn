import React from 'react';
import { TouchableHighlight, View } from 'react-native';

import tw from 'libs/tailwind';

type PaginatorProps = {
  slidesCount: number;
  activeIndex: number;
  onPress: (index: number) => void;
};

function Paginator({ slidesCount, activeIndex, onPress }: PaginatorProps) {
  return (
    <View style={tw`flex-row items-center justify-center m-4`}>
      {Array.from({ length: slidesCount }).map((_, i) => (
        <TouchableHighlight
          underlayColor={tw.color(i === activeIndex ? 'primary-700' : 'secondary-400')}
          style={tw.style('rounded-full bg-secondary-300 mr-2', {
            'bg-primary-600 w-10 h-5': i === activeIndex,
            'w-5 h-5 ': i !== activeIndex,
          })}
          onPress={() => onPress(i)}
          key={i}
        >
          <View />
        </TouchableHighlight>
      ))}
    </View>
  );
}

export default Paginator;
