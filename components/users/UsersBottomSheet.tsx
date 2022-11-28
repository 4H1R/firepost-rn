import React, { useMemo, useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { BottomSheetModal, BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { UseInfiniteQueryResult } from '@tanstack/react-query';
import { useNavigation } from '@react-navigation/native';

import { IPaginate, IUser } from 'interfaces';
import { IFollowersParams } from 'services/users/followers';
import tw from 'libs/tailwind';
import Picture from './show/Picture';
import Username from './show/Username';
import Name from './show/Name';
import ActivityIndicator from 'shared/common/ActivityIndicator';

const emojiList = ['👌', '👋', '🎉', '🔥', '🗿'];

type UsersBottomSheetProps = {
  modalRef: React.RefObject<BottomSheetModal>;
  title: string;
  useQuery: (
    username: string,
    params: IFollowersParams,
    options?: { enabled: boolean }
  ) => UseInfiniteQueryResult<IPaginate<IUser>, unknown>;
  username: string;
};

function UsersBottomSheet({ modalRef, useQuery, title, username }: UsersBottomSheetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigation();
  const [query, setQuery] = useState('');
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useQuery(
    username,
    { query },
    { enabled: isOpen }
  );
  const randomEmoji = useMemo(() => emojiList[Math.floor(Math.random() * emojiList.length)], []);

  const handleChange = (index: number) => setIsOpen(index >= 0);
  const handleLoadMore = () => hasNextPage && fetchNextPage();
  const handleNavigateToProfile = (profileUsername: string) => {
    navigation.navigate('Root', {
      screen: 'Users',
      params: { screen: 'Show', params: { username: profileUsername } },
    });
  };

  return (
    <BottomSheetModal
      style={tw`px-4`}
      backgroundStyle={tw`bg-secondary-100`}
      ref={modalRef}
      index={0}
      onChange={handleChange}
      snapPoints={['50%', '100%']}
    >
      <Text style={tw`font-primary-bold text-secondary-900 text-2xl`}>
        {title} {randomEmoji}
      </Text>
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Search ..."
        style={tw`p-2 my-4 w-full bg-secondary-200 rounded-lg font-primary`}
      />
      <BottomSheetFlatList
        data={data?.pages.map((page) => page.data).flat()}
        keyExtractor={(item) => item.username}
        onEndReachedThreshold={0.3}
        onEndReached={handleLoadMore}
        ListFooterComponent={isFetchingNextPage ? <ActivityIndicator /> : null}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => handleNavigateToProfile(item.username)}
          >
            <View style={tw`flex-row items-center pb-4`}>
              <Picture uri={item.image} />
              <View style={tw`flex ml-4 items-start`}>
                <Username
                  usernameStyle={tw`text-base`}
                  username={item.username}
                  isVerified={item.isVerified}
                />
                <Name style={tw`text-sm`} name={item.name} />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </BottomSheetModal>
  );
}

export default UsersBottomSheet;
