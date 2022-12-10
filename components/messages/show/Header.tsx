import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { IUser } from 'interfaces';
import { Picture } from 'shared/users/pictures';
import Username from 'components/users/show/Username';
import tw from 'libs/tailwind';

type HeaderProps = {
  user: IUser;
};

function Header({ user }: HeaderProps) {
  const navigation = useNavigation();
  const handleNavigateToProfile = () => {
    navigation.navigate('Root', {
      screen: 'Users',
      params: { screen: 'Show', params: { username: user.username } },
    });
  };

  return (
    <TouchableOpacity
      onPress={handleNavigateToProfile}
      style={tw`flex-row items-center justify-center`}
    >
      <Picture uri={user.image} style={tw`w-10 h-10 mr-2`} />
      <Username
        usernameStyle={tw`text-base`}
        username={user.username}
        isVerified={user.isVerified}
      />
    </TouchableOpacity>
  );
}

export default Header;
