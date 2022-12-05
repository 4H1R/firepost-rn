import React, { useState } from 'react';
import { Image, View, ViewStyle, TouchableWithoutFeedback, Modal, Text } from 'react-native';
import { BlurView } from 'expo-blur';

import Default from 'assets/svg/profile.svg';
import tw from 'libs/tailwind';

const fullProps = { style: tw`w-72 h-72 rounded-full` };

type PictureProps = {
  uri: string | null;
  containerStyle?: ViewStyle;
  imageStyle?: ViewStyle;
};

function Picture({ uri, imageStyle, containerStyle }: PictureProps) {
  const [isFull, setIsFull] = useState(false);
  const props = { style: tw.style('h-20 w-20 rounded-full', imageStyle) };

  const handleToggleIsFull = () => setIsFull((prev) => !prev);

  return (
    <>
      <TouchableWithoutFeedback onPress={handleToggleIsFull}>
        <View style={tw.style('border-2 border-secondary-400 rounded-full p-0.5', containerStyle)}>
          {uri ? <Image {...props} source={{ uri }} /> : <Default {...props} />}
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="fade" onRequestClose={handleToggleIsFull} visible={isFull} transparent>
        <TouchableWithoutFeedback onPress={handleToggleIsFull}>
          <BlurView
            tint="dark"
            intensity={200}
            style={tw`flex-1 flex items-center justify-center px-4`}
          >
            {uri ? <Image {...fullProps} source={{ uri }} /> : <Default {...fullProps} />}
          </BlurView>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
}

export default Picture;
