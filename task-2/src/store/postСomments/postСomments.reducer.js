import POST_COMMENTS_ACTION_TYPES from "./postСomments.types";


export const POST_COMMENTS_INITIAL_STATE = {
  postComments: [],
  isLoading: false,
  error: null,
};

export const postCommentsReducer = (
  state = POST_COMMENTS_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case POST_COMMENTS_ACTION_TYPES.FETCH_POST_COMMENTS_START:
      return { ...state, isLoading: true };
    case POST_COMMENTS_ACTION_TYPES.FETCH_POST_COMMENTS_SUCCESS:
      return { ...state, postComments: payload, isLoading: false, error: null };
    case POST_COMMENTS_ACTION_TYPES.FETCH_POST_COMMENTS_FAILED:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
};
