import React from 'react';
import ContentLoaderMain, { IContentLoaderProps } from 'react-content-loader/native';

import tw from 'libs/tailwind';

function ContentLoader({ children, ...props }: IContentLoaderProps) {
  return (
    <ContentLoaderMain
      {...props}
      speed={2}
      backgroundColor={tw.color('secondary-200')}
      foregroundColor={tw.color('secondary-100')}
    >
      {children}
    </ContentLoaderMain>
  );
}

export default ContentLoader;
