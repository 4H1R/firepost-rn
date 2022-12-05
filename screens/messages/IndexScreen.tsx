import React, { useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { ChevronRightIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

import tw from 'libs/tailwind';
import SearchTextInput from 'shared/common/SearchTextInput';
import Picture from 'components/users/show/Picture';
import Username from 'components/users/show/Username';
import Name from 'components/users/show/Name';
import useGetMessagedUsers from 'services/messages';
import ActivityIndicator from 'shared/common/ActivityIndicator';

function IndexScreen() {
  const navigation = useNavigation();
  const [query, setQuery] = useState('');
  const { data, fetchNextPage, isFetchingNextPage } = useGetMessagedUsers({ query });

  const handleNavigateToMessage = (username: string) => {
    navigation.navigate('Messages', {
      screen: 'Show',
      params: { username },
    });
  };

  return (
    <View style={tw`bg-color flex-1`}>
      <FlatList
        contentContainerStyle={tw`container`}
        ListHeaderComponent={<SearchTextInput onTextDebounced={setQuery} />}
        data={data?.pages.map((page) => page.data).flat()}
        keyExtractor={(item) => item.username}
        onEndReachedThreshold={0.3}
        onEndReached={() => fetchNextPage()}
        ListFooterComponent={isFetchingNextPage ? <ActivityIndicator /> : null}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => handleNavigateToMessage(item.username)}
          >
            <View style={tw`flex-row items-center pt-4`}>
              <Picture uri={item.image} />
              <View style={tw`flex ml-4 items-start`}>
                <Username
                  usernameStyle={tw`text-base`}
                  username={item.username}
                  isVerified={item.isVerified}
                />
                <Name style={tw`text-sm`} name={item.name} />
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