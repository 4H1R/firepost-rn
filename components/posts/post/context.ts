import { createContext, Dispatch } from 'react';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

import { IPostFull } from 'interfaces';
import { TPost, TPostAction } from './reducer';

type TPostContext = {
  state: TPost;
  dispatch: Dispatch<TPostAction>;
  post: IPostFull;
  likersRef: React.RefObject<BottomSheetModalMethods>;
};

const postContext = createContext<TPostContext>({} as TPostContext);

export default postContext;
