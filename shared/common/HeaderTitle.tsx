import React from 'react';
import { Text } from 'react-native';

import tw from 'libs/tailwind';

type HeaderTitleProps = {
  title: string;
};

function HeaderTitle({ title }: HeaderTitleProps) {
  return <Text style={tw`font-primary text-base`}>{title}</Text>;
}

export default HeaderTitle;
