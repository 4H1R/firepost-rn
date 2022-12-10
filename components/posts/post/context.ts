import { createContext, SetStateAction } from 'react';

type TPostContext = {
  isLiked: boolean;
  setIsLiked: React.Dispatch<SetStateAction<boolean>>;
  isSaved: boolean;
  setIsSaved: React.Dispatch<SetStateAction<boolean>>;
};

const postContext = createContext<TPostContext>({
  isLiked: true,
  setIsLiked: () => {},
  isSaved: true,
  setIsSaved: () => {},
});

export default postContext;
