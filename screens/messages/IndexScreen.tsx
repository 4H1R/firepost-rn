import React, { useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { ChevronRightIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

import { ZoomablePictureBorder } from 'shared/users/pictures';
import { IUser } from 'interfaces';
import tw from 'libs/tailwind';
import SearchTextInput from 'shared/common/SearchTextInput';
import Username from 'components/users/show/Username';
import Name from 'components/users/show/Name';
import useGetMessagedUsers from 'services/messages';
import ActivityIndicator from 'shared/common/ActivityIndicator';
import BgContainer from 'shared/container/BgContainer';
import SafeAreaView from 'shared/common/SafeAreaView';
import Empty from 'shared/list/Empty';

function IndexScreen() {
  const navigation = useNavigation();
  const [query, setQuery] = useState('');
  const { isLoading, data, fetchNextPage, isFetchingNextPage, isRefetching, refetch } =
    useGetMessagedUsers({
      query,
    });

  const handleNavigateToMessage = (user: IUser) => {
    navigation.navigate('Messages', {
      screen: 'Show',
      params: { user },
    });
  };

  return (
    <BgContainer>
      <SafeAreaView>
        <FlatList
          refreshing={isRefetching}
          onRefresh={refetch}
          contentContainerStyle={tw`container`}
          ListEmptyComponent={
            isLoading ? null : (
              <Empty
                title="You haven't messaged anyone yet"
                description="Start chatting with your friends and families or anyone you want 🔥."
              />
            )
          }
          ListHeaderComponent={<SearchTextInput onTextDebounced={setQuery} />}
          data={data?.pages.map((page) => page.data).flat()}
          keyExtractor={(item) => item.username}
          onEndReachedThreshold={0.3}
          onEndReached={() => fetchNextPage()}
          ListFooterComponent={isFetchingNextPage ? <ActivityIndicator /> : null}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.6} onPress={() => handleNavigateToMessage(item)}>
              <View style={tw`flex-row items-center pt-4`}>
                <ZoomablePictureBorder uri={item.image} />
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
      </SafeAreaView>
    </BgContainer>
  );
}

export default IndexScreen;
