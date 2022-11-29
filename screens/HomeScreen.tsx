import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import {
  BookmarkIcon,
  ChatBubbleLeftEllipsisIcon,
  FireIcon,
  PaperAirplaneIcon,
} from 'react-native-heroicons/outline';

import tw from 'libs/tailwind';
import useGetHomePosts from 'services/posts/home';
import ActivityIndicator from 'shared/common/ActivityIndicator';
import Bio from 'components/users/show/Bio';
import Picture from 'components/users/show/Picture';

function HomeScreen() {
  const { data: posts, isFetchingNextPage, fetchNextPage } = useGetHomePosts();

  return (
    <FlatList
      onEndReachedThreshold={0.3}
      numColumns={1}
      contentContainerStyle={tw`container py-0`}
      data={posts?.pages.map((page) => page.data).flat()}
      keyExtractor={(post) => post.id.toString()}
      onEndReached={() => fetchNextPage()}
      ListFooterComponent={isFetchingNextPage ? <ActivityIndicator /> : null}
      renderItem={({ item: post }) => (
        <View style={tw`mb-2`}>
          <View style={tw`relative`}>
            <Image
              source={{ uri: post.image }}
              style={tw`w-full h-80 rounded-tl-3xl rounded-tr-3xl`}
            />
            <View
              style={tw`flex-row items-center justify-center absolute bg-secondary-600 rounded-3xl py-1 pl-2 pr-3 left-3 top-3`}
            >
              <Picture imageStyle={tw`h-10 w-10`} uri={post.user.image} />
              <View style={tw`ml-2`}>
                <Text style={tw`font-primary-semi text-base text-secondary-50`}>
                  {post.user.username}
                </Text>
                <Text style={tw`font-primary text-sm text-secondary-200`}>{post.user.name}</Text>
              </View>
            </View>
          </View>
          <View style={tw`bg-secondary-200 container`}>
            <View style={tw`flex-row justify-between mt-2`}>
              <View style={tw`flex-row`}>
                <ChatBubbleLeftEllipsisIcon style={tw`w-4 h-4 text-secondary-900 mr-4`} />
                <PaperAirplaneIcon style={tw`w-4 h-4 text-secondary-900 mr-4`} />
                <BookmarkIcon style={tw`w-4 h-4 text-secondary-900 mr-4`} />
              </View>
              <FireIcon style={tw`w-4 h-4 text-secondary-900`} />
            </View>
            <Bio bio={post.description} />
          </View>
        </View>
      )}
    />
  );
}

export default HomeScreen;
