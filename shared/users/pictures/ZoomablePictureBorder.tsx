import React from 'react';

import Picture, { PictureProps } from './Picture';
import PictureBorder from './PictureBorder';
import ZoomablePicture from './ZoomablePicture';

function ZoomablePictureBorder({ uri, style }: PictureProps) {
  return (
    <ZoomablePicture uri={uri}>
      <PictureBorder>
        <Picture uri={uri} style={style} />
      </PictureBorder>
    </ZoomablePicture>
  );
}

export default ZoomablePictureBorder;
