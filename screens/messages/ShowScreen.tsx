import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native';

import { TMessagesStackParamList } from 'types';
import useGetUserMessages from 'services/messages/show';
import tw from 'libs/tailwind';
import ActivityIndicator from 'shared/common/ActivityIndicator';
import useAuthUser from 'stores/authStore';
import Input from 'components/messages/show/Input';
import Message from 'components/messages/show/Message';
import BgContainer from 'shared/container/BgContainer';
import SafeAreaView from 'shared/common/SafeAreaView';

function ShowScreen() {
  const authUser = useAuthUser((state) => state.user);
  const { params } = useRoute<RouteProp<TMessagesStackParamList, 'Show'>>();
  const { data, fetchNextPage, isFetchingNextPage } = useGetUserMessages({
    username: params.username,
  });

  return (
    <BgContainer>
      <SafeAreaView>
        <FlatList
          contentContainerStyle={tw`container pb-12`}
          data={data?.pages.map((page) => page.data).flat()}
          keyExtractor={(message) => message.id}
          onEndReachedThreshold={0.3}
          onEndReached={() => fetchNextPage()}
          ListFooterComponent={isFetchingNextPage ? <ActivityIndicator /> : null}
          renderItem={({ item: message }) => <Message {...message} authUser={authUser!} />}
        />
      </SafeAreaView>
      <Input username={params.username} />
    </BgContainer>
  );
}

export default ShowScreen;
