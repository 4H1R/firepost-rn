import { SvgProps } from 'react-native-svg';

import First from 'assets/svg/introSlides/first.svg';
import Second from 'assets/svg/introSlides/second.svg';
import Third from 'assets/svg/introSlides/third.svg';
import Fourth from 'assets/svg/introSlides/fourth.svg';

interface ISlide {
  title: string;
  description: string;
}

export interface IIntroSlide extends ISlide {
  id: string;
  Illustration: React.FC<SvgProps>;
}

const illustrations = [First, Second, Third, Fourth];

export function transformIntroSlides(slides: ISlide[]): IIntroSlide[] {
  return slides.map((slide, i) => ({ ...slide, id: i.toString(), Illustration: illustrations[i] }));
}
