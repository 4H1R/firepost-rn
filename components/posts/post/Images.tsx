import React, { useMemo } from 'react';
import { Image, FlatList } from 'react-native';

import tw from 'libs/tailwind';

type ImagesProps = {
  images: string[];
};

function Images({ images }: ImagesProps) {
  const viewConfig = useMemo(() => ({ viewAreaCoveragePercentThreshold: 50 }), []);

  return (
    <FlatList
      horizontal
      viewabilityConfig={viewConfig}
      data={images}
      contentContainerStyle={tw`flex-1`}
      pagingEnabled
      showsHorizontalScrollIndicator
      scrollEventThrottle={32}
      keyExtractor={(_, i) => i.toString()}
      renderItem={({ item: image }) => (
        <Image
          source={{ uri: image }}
          style={tw`w-full h-96 rounded-tl-3xl rounded-tr-3xl skeleton`}
        />
      )}
    />
  );
}

export default Images;
