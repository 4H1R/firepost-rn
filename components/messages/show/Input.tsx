import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { PaperAirplaneIcon } from 'react-native-heroicons/outline';
import Toast from 'react-native-toast-message';

import tw from 'libs/tailwind';
import useCreateMessage from 'services/messages/create';
import { useTranslation } from 'react-i18next';
import { useQueryClient } from '@tanstack/react-query';

type InputProps = {
  username: string;
};

function Input({ username }: InputProps) {
  const queryClient = useQueryClient();
  const { t } = useTranslation();
  const [text, setText] = useState('');
  const { mutate: createMessage, isLoading } = useCreateMessage();

  const isDisabled = !text || isLoading;

  const handleCreateMessage = () => {
    createMessage(
      { username, text },
      {
        onSuccess: () => {
          setText('');
          queryClient.invalidateQueries(['messages', username]);
        },
        onError: () => {
          Toast.show({ type: 'error', text1: t('errors.somethingWentWrong') });
        },
      }
    );
  };
  return (
    <View style={tw`flex-row justify-between items-center bg-secondary-200 py-3 px-4 mt-auto`}>
      <TextInput
        multiline
        value={text}
        onChangeText={setText}
        placeholder="Type your message ..."
        placeholderTextColor={tw.color('secondary-600')}
        style={tw`flex-1 font-primary rounded-t-lg`}
      />
      <TouchableOpacity
        onPress={handleCreateMessage}
        disabled={isDisabled}
        style={tw.style({ 'opacity-50': isDisabled })}
      >
        <PaperAirplaneIcon strokeWidth={2} style={tw`h-6 w-6 text-primary-600`} />
      </TouchableOpacity>
    </View>
  );
}

export default Input;
