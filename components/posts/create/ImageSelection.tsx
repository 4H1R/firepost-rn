import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { PlusCircleIcon } from 'react-native-heroicons/outline';

import tw from 'libs/tailwind';

function ImageSelection() {
  return (
    <TouchableOpacity
      style={tw`flex-1 items-center justify-center py-8 px-4 border rounded-lg border-secondary-300 mt-2`}
    >
      <View style={tw`bg-secondary-200 rounded-full p-1`}>
        <PlusCircleIcon size={30} style={tw`text-primary-600`} />
      </View>
      <Text style={tw`font-primary-semi text-sm mt-2 text-secondary-900`}>Select your Images</Text>
    </TouchableOpacity>
  );
}

export default ImageSelection;
