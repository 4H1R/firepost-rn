import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import tw from 'libs/tailwind';

const headerOptions: NativeStackNavigationOptions = {
  headerShown: true,
  headerStyle: tw`bg-white`,
};

export default headerOptions;
