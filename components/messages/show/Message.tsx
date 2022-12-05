import React from 'react';
import { Text, View } from 'react-native';

import { IAuthUser, IMessage } from 'interfaces';
import tw from 'libs/tailwind';

interface MessageProps extends IMessage {
  authUser: IAuthUser;
}

function Message({ authUser, senderId, text, createdAt }: MessageProps) {
  return (
    <View
      style={tw.style('mb-3', {
        'flex-row-reverse': authUser!.id === senderId,
        'flex-row': authUser!.id !== senderId,
      })}
    >
      <View
        style={tw.style('rounded-lg p-2', {
          'bg-primary-600 rounded-br-none': authUser!.id === senderId,
          'bg-secondary-200 rounded-bl-none': authUser!.id !== senderId,
        })}
      >
        <Text
          style={tw.style('font-primary', {
            'text-secondary-50': authUser!.id === senderId,
            'text-secondary-900': authUser!.id !== senderId,
          })}
        >
          {text}
        </Text>
        <Text
          style={tw.style('font-primary text-xs ', {
            'ml-auto text-secondary-400': authUser!.id === senderId,
            'mr-auto text-secondary-500': authUser!.id !== senderId,
          })}
        >
          {new Date(createdAt).toLocaleString()}
        </Text>
      </View>
    </View>
  );
}

export default Message;
