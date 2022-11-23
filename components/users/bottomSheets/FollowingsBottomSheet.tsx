import React, { useState } from 'react';

import useGetUserFollowings from 'services/users/followings';
import UsersBottomSheet from './UsersBottomSheet';

type FollowingsBottomSheetProps = {
  username: string;
  modalRef: any;
};

function FollowingsBottomSheet({ username, modalRef }: FollowingsBottomSheetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const query = useGetUserFollowings(username, isOpen);

  return (
    <UsersBottomSheet
      onChange={(i) => setIsOpen(i >= 0)}
      title="Followings"
      query={query}
      modalRef={modalRef}
    />
  );
}

export default FollowingsBottomSheet;
