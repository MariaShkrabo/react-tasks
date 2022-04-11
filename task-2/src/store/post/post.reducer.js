import POST_ACTION_TYPES from "./post.types";

export const POST_INITIAL_STATE = {
  post: {},
};

export const postReducer = (
  state = POST_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case POST_ACTION_TYPES.SET_CURRENT_POST:
      return { ...state, post: payload };
    default:
      return state;
  }
};
