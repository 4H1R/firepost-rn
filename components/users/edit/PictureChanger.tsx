import React from 'react';
import { TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { Picture } from 'shared/users/pictures';
import tw from 'libs/tailwind';
import Description from './Description';

interface ProfilePictureProps {
  image: string | null;
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
}

function PictureChanger({ image, setImage }: ProfilePictureProps) {
  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
      allowsMultipleSelection: false,
    });
    if (result.canceled) return;
    setImage(result.assets[0].uri);
  };

  return (
    <>
      <TouchableOpacity style={tw`w-36 h-36 mt-2`} onPress={handlePickImage}>
        <Picture uri={image} style={tw`rounded-none w-36 h-36`} />
      </TouchableOpacity>
      <Description description="Profile picture can be your photo or any photo that you like! Click it to change it." />
    </>
  );
}

export default PictureChanger;
