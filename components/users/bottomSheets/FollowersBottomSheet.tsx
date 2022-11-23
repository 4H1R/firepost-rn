import React, { useState } from 'react';

import useGetUserFollowers from 'services/users/followers';
import UsersBottomSheet from './UsersBottomSheet';

type FollowersBottomSheetProps = {
  username: string;
  modalRef: any;
};

function FollowersBottomSheet({ username, modalRef }: FollowersBottomSheetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const query = useGetUserFollowers(username, isOpen);

  return (
    <UsersBottomSheet
      onChange={(i) => setIsOpen(i >= 0)}
      title="Followers"
      query={query}
      modalRef={modalRef}
    />
  );
}

export default FollowersBottomSheet;
