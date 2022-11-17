import React, { useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import tw from 'libs/tailwind';

import introSlides from 'fixtures/introSlides';
import Slide from './Slide';

type IntroSlidesProps = {
  children: React.ReactNode;
};

function IntroSlides({ children }: IntroSlidesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef<FlatList>(null);
  const isTheLastSlide = currentIndex === introSlides.length - 1;

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      setCurrentIndex(viewableItems[0].index ?? 0);
    }
  ).current;

  const handlePress = (index: number) => {
    if (!isTheLastSlide) {
      slidesRef.current?.scrollToIndex({ index });
      return;
    }
  };

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <SafeAreaView style={tw`flex-1 items-center justify-center`}>
      <FlatList
        ref={slidesRef}
        data={introSlides}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        bounces={false}
        scrollEventThrottle={32}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfig}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <Slide
            {...item}
            index={index}
            activeIndex={currentIndex}
            slidesCount={introSlides.length}
            onPress={handlePress}
          />
        )}
      />
    </SafeAreaView>
  );
}

export default IntroSlides;
