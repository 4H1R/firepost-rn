import React, { useMemo, useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { INTRO_SLIDER_KEY } from 'components/ResourceLoader';
import { transformIntroSlides } from 'utils/introSlides';
import Slide from './Slide';
import useIntroSlider from 'stores/introSliderStore';
import tw from 'libs/tailwind';

type IntroSlidesProps = {
  children: JSX.Element;
};

function IntroSlides({ children }: IntroSlidesProps) {
  const { t } = useTranslation();
  const { show, hideIntroSlider } = useIntroSlider((state) => state);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef<FlatList>(null);
  const introSlides = useMemo(
    () => transformIntroSlides(t('introSlides', { returnObjects: true })),
    []
  );

  const handleHideIntroSlider = async () => {
    try {
      await AsyncStorage.setItem(INTRO_SLIDER_KEY, 'false');
    } catch {
    } finally {
      hideIntroSlider();
    }
  };

  const handlePress = (index: number) => {
    if (index < introSlides.length) {
      slidesRef.current?.scrollToIndex({ index });
      return;
    }
    handleHideIntroSlider();
  };

  const onViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    setCurrentIndex(viewableItems[0].index ?? 0);
  }).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  if (!show) return children;
  return (
    <SafeAreaView style={tw`flex-1 items-center justify-center`}>
      <FlatList
        ref={slidesRef}
        data={introSlides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
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
