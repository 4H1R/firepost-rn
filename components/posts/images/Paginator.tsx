import React from 'react';
import { View } from 'react-native';

import tw from 'libs/tailwind';

type DotProps = {
  isActive?: boolean;
  isSmall?: boolean;
};

function Dot({ isActive = false, isSmall = false }: DotProps) {
  return (
    <View
      style={tw.style('rounded-full bg-secondary-400 mx-0.5 w-2 h-2 ', {
        'bg-primary-700': isActive,
        'w-1.5 h-1.5': isSmall,
      })}
    />
  );
}

type PaginatorProps = {
  total: number;
  activeIndex: number;
};

function Paginator({ total, activeIndex }: PaginatorProps) {
  return (
    <View style={tw`flex-row items-center justify-center mx-auto`}>
      {Array.from({ length: total }).map((_, i) => (
        <Dot isActive={i === activeIndex} key={i} />
      ))}
    </View>
  );
}

export default Paginator;
