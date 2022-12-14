import React from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { splitFirstWordAndRest } from 'utils';
import { IIntroSlide } from 'utils/introSlides';
import Button from 'shared/common/Button';
import tw from 'libs/tailwind';
import Paginator from './Paginator';

interface SlideProps extends IIntroSlide {
  activeIndex: number;
  slidesCount: number;
  onPress: (index: number) => void;
  index: number;
}

function Slide({
  Illustration,
  title,
  description,
  slidesCount,
  activeIndex,
  onPress,
  index,
}: SlideProps) {
  const { t } = useTranslation();
  const { width } = useWindowDimensions();
  const [firstWord, restTitle] = splitFirstWordAndRest(title);
  const isTheLastSlide = activeIndex === slidesCount - 1;

  return (
    <View style={tw.style('flex justify-center items-center px-4', { width })}>
      <Illustration style={tw`w-full h-56 mt-4`} />
      <Paginator onPress={onPress} activeIndex={activeIndex} slidesCount={slidesCount} />
      <Text style={tw`text-center text-2xl font-primary-bold`}>
        <Text style={tw`text-primary-600`}>{firstWord}</Text> {restTitle}
      </Text>
      <Text style={tw`text-center font-primary text-base text-secondary-500 mt-2`}>
        {description}
      </Text>
      <Button
        onPress={() => onPress(index + 1)}
        text={isTheLastSlide ? t('introSlides.getStarted') : t('introSlides.next')}
      />
    </View>
  );
}

export default Slide;
