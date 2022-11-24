import React, { useMemo, useState } from 'react';
import { ActivityIndicator, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { BottomSheetModal, BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { UseInfiniteQueryResult } from '@tanstack/react-query';
import { useNavigation } from '@react-navigation/native';

import { IPaginate, IUser } from 'interfaces';
import { IFollowersParams } from 'services/users/followers';
import tw from 'libs/tailwind';
import Picture from './show/Picture';
import Username from './show/Username';
import Name from './show/Name';

const emojiList = ['👌', '👋', '🎉', '🔥', '🗿'];

type UsersBottomSheetProps = {
  modalRef: React.RefObject<BottomSheetModal>;
  title: string;
  useQuery: (
    username: string,
    params: IFollowersParams
  ) => UseInfiniteQueryResult<IPaginate<IUser>, unknown>;
  username: string;
};

function UsersBottomSheet({ modalRef, useQuery, title, username }: UsersBottomSheetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigation();
  const [query, setQuery] = useState('');
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useQuery(username, {
    enabled: isOpen,
    query,
  });
  const randomEmoji = useMemo(() => emojiList[Math.floor(Math.random() * emojiList.length)], []);

  const handleChange = (index: number) => setIsOpen(index >= 0);
  const handleLoadMore = () => {
    if (!hasNextPage) return;
    fetchNextPage();
  };
  const handleNavigateToProfile = (userUsername: string) => {
    navigation.push('Root', {
      screen: 'Profile',
      params: { username: userUsername },
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
        ListFooterComponent={
          isFetchingNextPage ? (
            <ActivityIndicator style={tw`my-2`} size="large" color={tw.color('primary-600')} />
          ) : null
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => handleNavigateToProfile(item.username)}
          >
            <View style={tw`flex-row items-center pb-4`}>
              <Picture />
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
