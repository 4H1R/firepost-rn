export type TPost = {
  isLiked: boolean;
  isSaved: boolean;
  likesCount: number;
};

export enum PostActionType {
  LIKE,
  UN_LIKE,
  SAVE,
  UN_SAVE,
}

export type TPostAction = {
  type: PostActionType;
};

export function postReducer(state: TPost, action: TPostAction) {
  const { type } = action;

  switch (type) {
    case PostActionType.LIKE:
      return { ...state, isLiked: true, likesCount: state.likesCount + 1 };
    case PostActionType.UN_LIKE:
      return { ...state, isLiked: false, likesCount: state.likesCount - 1 };
    case PostActionType.SAVE:
      return { ...state, isSaved: true };
    case PostActionType.UN_SAVE:
      return { ...state, isSaved: false };
    default:
      return state;
  }
}
