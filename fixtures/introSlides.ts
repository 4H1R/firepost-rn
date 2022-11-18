import { SvgProps } from 'react-native-svg';

import First from 'assets/svg/introSlides/first.svg';
import Second from 'assets/svg/introSlides/second.svg';
import Third from 'assets/svg/introSlides/third.svg';
import Fourth from 'assets/svg/introSlides/fourth.svg';

export interface IIntroSlide {
  id: string;
  title: string;
  description: string;
  Illustration: React.FC<SvgProps>;
}
const introSlides: IIntroSlide[] = [
  {
    id: '1',
    title: 'Welcome to FirePost',
    description: 'This is where the Fire begins make sure to be in fire everyday!',
    Illustration: First,
  },
  {
    id: '2',
    title: 'Share your Photos and Videos',
    description: 'Be on touch with your friends and see their photos and videos',
    Illustration: Second,
  },
  {
    id: '3',
    title: 'Find new friends',
    description: 'Browse through the app and find new people',
    Illustration: Third,
  },
  {
    id: '4',
    title: 'Check your followers',
    description: 'See how long your followers have been following you',
    Illustration: Fourth,
  },
];

export default introSlides;
