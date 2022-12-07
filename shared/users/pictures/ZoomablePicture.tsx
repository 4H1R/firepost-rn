import React, { useState } from 'react';
import { Image, TouchableWithoutFeedback, Modal } from 'react-native';
import { BlurView } from 'expo-blur';

import { PictureProps } from './Picture';
import Default from 'assets/svg/profile.svg';
import tw from 'libs/tailwind';

const fullProps = { style: tw`w-72 h-72 rounded-full` };

interface ZoomablePictureProps extends Pick<PictureProps, 'uri'> {
  children: React.ReactNode;
}

function ZoomablePicture({ children, uri }: ZoomablePictureProps) {
  const [isFull, setIsFull] = useState(false);
  const handleToggleIsFull = () => setIsFull((prev) => !prev);

  return (
    <>
      <TouchableWithoutFeedback onPress={handleToggleIsFull}>{children}</TouchableWithoutFeedback>
      <Modal animationType="fade" onRequestClose={handleToggleIsFull} visible={isFull} transparent>
        <TouchableWithoutFeedback onPress={handleToggleIsFull}>
          <BlurView intensity={200} style={tw`flex-1 flex items-center justify-center px-4`}>
            {uri ? <Image {...fullProps} source={{ uri }} /> : <Default {...fullProps} />}
          </BlurView>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
}

export default ZoomablePicture;
