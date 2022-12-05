import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { FlatList, View } from 'react-native';

import { TMessagesStackParamList } from 'types';
import useGetUserMessages from 'services/messages/show';
import tw from 'libs/tailwind';
import ActivityIndicator from 'shared/common/ActivityIndicator';
import useAuthUser from 'stores/authStore';
import Input from 'components/messages/show/Input';
import Message from 'components/messages/show/Message';

function ShowScreen() {
  const authUser = useAuthUser((state) => state.user);
  const { params } = useRoute<RouteProp<TMessagesStackParamList, 'Show'>>();
  const { data, fetchNextPage, isFetchingNextPage } = useGetUserMessages({
    username: params.username,
  });

  return (
    <View style={tw`bg-color flex-1`}>
      <FlatList
        contentContainerStyle={tw`container`}
        data={data?.pages.map((page) => page.data).flat()}
        keyExtractor={(message) => message.id}
        onEndReachedThreshold={0.3}
        onEndReached={() => fetchNextPage()}
        ListFooterComponent={isFetchingNextPage ? <ActivityIndicator /> : null}
        renderItem={({ item: message }) => <Message {...message} authUser={authUser!} />}
      />
      <Input username={params.username} />
    </View>
  );
}

export default ShowScreen;
