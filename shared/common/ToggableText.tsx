import React, { useState } from 'react';
import { Text, TouchableWithoutFeedback } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import Toast from 'react-native-toast-message';

import tw from 'libs/tailwind';

type TogglableTextProps = {
  text: string | null;
  maxLength?: number;
  canCopy?: boolean;
};

function ToggableText({ text, maxLength = 150, canCopy = true }: TogglableTextProps) {
  const [isShort, setIsShort] = useState(true);
  if (!text) return null;

  const isBig = text.length > maxLength;
  const textTransformed = isShort ? text.slice(0, maxLength) : text;
  const handleToggleShort = () => isBig && setIsShort((prev) => !prev);
  const handleCopyText = async () => {
    if (!canCopy) return;
    await Clipboard.setStringAsync(text);
    Toast.show({ type: 'success', text1: 'Text Copied Successfully.' });
  };

  return (
    <TouchableWithoutFeedback onLongPress={handleCopyText} onPress={handleToggleShort}>
      <Text style={tw`font-primary-medium text-sm text-secondary-900 mt-2`}>
        {textTransformed}{' '}
        <Text style={tw`text-primary-600 text-base`}>{isBig && isShort && '...'}</Text>
      </Text>
    </TouchableWithoutFeedback>
  );
}

export default ToggableText;
