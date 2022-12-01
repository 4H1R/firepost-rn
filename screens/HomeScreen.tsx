import React from 'react';
import { FlatList, Image, Text, View, TouchableOpacity, ListRenderItem } from 'react-native';
import {
  BookmarkIcon,
  ChatBubbleLeftEllipsisIcon,
  FireIcon,
  PaperAirplaneIcon,
} from 'react-native-heroicons/outline';
import { BlurView } from 'expo-blur';
import { useNavigation } from '@react-navigation/native';

import tw from 'libs/tailwind';
import useGetHomePosts from 'services/posts/home';
import ActivityIndicator from 'shared/common/ActivityIndicator';
import Picture from 'components/users/show/Picture';
import ToggableText from 'shared/common/ToggableText';

function HomeScreen() {
  const { data: posts, isFetchingNextPage, fetchNextPage } = useGetHomePosts();
  const navigation = useNavigation();

  const handleNavigateToUser = (username: string) => {
    navigation.navigate('Root', {
      screen: 'Users',
      params: { screen: 'Show', params: { username } },
    });
  };

  return (
    <FlatList
      onEndReachedThreshold={0.3}
      numColumns={1}
      removeClippedSubviews
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
            <BlurView
              intensity={80}
              tint="dark"
              style={tw`absolute rounded-3xl py-1 pl-2 pr-3 left-3 top-3`}
            >
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => handleNavigateToUser(post.user.username)}
                style={tw`flex-row items-center justify-center`}
              >
                <Picture imageStyle={tw`h-10 w-10`} uri={post.user.image} />
                <View style={tw`ml-2`}>
                  <Text style={tw`font-primary-semi text-base text-secondary-50`}>
                    {post.user.username}
                  </Text>
                  <Text style={tw`font-primary text-sm text-secondary-200`}>{post.user.name}</Text>
                </View>
              </TouchableOpacity>
            </BlurView>
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
            <ToggableText text={post.description} />
          </View>
        </View>
      )}
    />
  );
}

export default HomeScreen;
