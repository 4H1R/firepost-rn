import React from 'react';
import { View } from 'react-native';

import tw from 'libs/tailwind';

type PaginatorProps = {
  total: number;
  activeIndex: number;
};

function Paginator({ total, activeIndex }: PaginatorProps) {
  return (
    <View style={tw`flex-row mx-auto`}>
      {Array.from({ length: total }).map((_, i) => (
        <View
          key={i}
          style={tw.style('rounded-full bg-secondary-400 mx-0.5 w-2 h-2 ', {
            'bg-primary-700': i === activeIndex,
          })}
        />
      ))}
    </View>
  );
}

export default Paginator;
