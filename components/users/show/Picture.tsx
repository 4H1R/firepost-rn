import React from 'react';

import Profile from 'assets/svg/profile.svg';
import tw from 'libs/tailwind';

function Picture() {
  return <Profile style={tw`h-20 w-20 border-2 border-secondary-400 rounded-full`} />;
}

export default Picture;
