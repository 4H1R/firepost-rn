import React, { useCallback, useMemo } from 'react';
import { Image, FlatList, Dimensions, ViewToken } from 'react-native';

import tw from 'libs/tailwind';

type ImagesProps = {
  images: string[];
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
};

function Images({ images, setCurrentIndex }: ImagesProps) {
  const dimensions = Dimensions.get('screen');
  const containerPaddings = 32;

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      setCurrentIndex(viewableItems[0].index ?? 0);
    },
    []
  );

  const viewConfig = useMemo(() => ({ viewAreaCoveragePercentThreshold: 50 }), []);

  return (
    <FlatList
      horizontal
      data={images}
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={32}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={viewConfig}
      keyExtractor={(_, i) => i.toString()}
      renderItem={({ item: image }) => (
        <Image
          source={{ uri: image }}
          style={tw.style('h-96 rounded-tl-3xl rounded-tr-3xl skeleton', {
            width: dimensions.width - containerPaddings,
          })}
        />
      )}
    />
  );
}

export default Images;
