import POSTS_ACTION_TYPES from "./posts.types";

export const POSTS_INITIAL_STATE = {
  posts: [],
  isLoading: false,
  error: null,
};

export const postsReducer = (
  state = POSTS_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case POSTS_ACTION_TYPES.FETCH_POSTS_START:
      return { ...state, isLoading: true };
    case POSTS_ACTION_TYPES.FETCH_POSTS_SUCCESS:
      return { ...state, posts: payload, isLoading: false, error: null };
    case POSTS_ACTION_TYPES.FETCH_POSTS_FAILED:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
};
