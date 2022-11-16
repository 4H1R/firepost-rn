import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import tw from 'libs/tailwind';

function LoginWithGoogle() {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={tw`flex-row items-center justify-center py-3 w-full bg-secondary-200 rounded-lg mt-4`}
    >
      <Text style={tw`text-secondary-500 font-primary text-base`}>
        Login with Google
      </Text>
    </TouchableOpacity>
  );
}

export default LoginWithGoogle;
