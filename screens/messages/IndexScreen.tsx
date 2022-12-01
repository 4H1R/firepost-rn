import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { ChevronRightIcon } from 'react-native-heroicons/outline';

import tw from 'libs/tailwind';
import SearchTextInput from 'shared/common/SearchTextInput';
import Picture from 'components/users/show/Picture';
import Username from 'components/users/show/Username';
import Name from 'components/users/show/Name';

function IndexScreen() {
  const data = Array.from({ length: 10 }).map((_, i) => i);

  return (
    <View style={tw`bg-color flex-1`}>
      <FlatList
        contentContainerStyle={tw`container`}
        ListHeaderComponent={<SearchTextInput style={tw`mt-0`} onTextDebounced={() => {}} />}
        data={data}
        keyExtractor={(i) => i.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.6}>
            <View style={tw`flex-row items-center pb-4`}>
              <Picture uri={null} />
              <View style={tw`flex ml-4 items-start`}>
                <Username usernameStyle={tw`text-base`} username={'ghostrockz3d'} isVerified />
                <Name style={tw`text-sm`} name={'Average Enjoyer'} />
              </View>
              <ChevronRightIcon style={tw`h-6 w-6 text-secondary-900 ml-auto`} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default IndexScreen;
