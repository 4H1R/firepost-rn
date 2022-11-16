import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import tw from 'libs/tailwind';

function ORDivider() {
  const { t } = useTranslation();
  return (
    <View style={tw`flex-row items-center justify-between mt-4 w-full`}>
      <View style={tw`border-t w-full flex-1 mr-4 border-secondary-500`} />
      <Text style={tw`text-secondary-500 text-sm`}>{t('auth.or')}</Text>
      <View style={tw`border-t w-full flex-1 ml-4 border-secondary-500`} />
    </View>
  );
}

export default ORDivider;
