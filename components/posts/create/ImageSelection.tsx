import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { PlusCircleIcon } from 'react-native-heroicons/outline';
import * as ImagePicker from 'expo-image-picker';

import tw from 'libs/tailwind';

type ImageSelectionProps = {
  setImages: (images: ImagePicker.ImagePickerAsset[]) => void;
};

function ImageSelection({ setImages }: ImageSelectionProps) {
  const handlePickImages = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 4],
      quality: 1,
      allowsMultipleSelection: true,
    });
    if (result.canceled) return;
    setImages(result.assets);
  };

  return (
    <TouchableOpacity
      onPress={handlePickImages}
      style={tw`flex items-center justify-center py-8 px-4 border rounded-lg border-secondary-300 mt-2`}
    >
      <View style={tw`bg-secondary-200 rounded-full p-1`}>
        <PlusCircleIcon size={30} style={tw`text-primary-600`} />
      </View>
      <Text style={tw`font-primary-semi text-sm mt-2 text-secondary-900`}>Add your Images</Text>
    </TouchableOpacity>
  );
}

export default ImageSelection;
