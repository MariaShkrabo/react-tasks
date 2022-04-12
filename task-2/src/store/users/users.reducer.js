import USERS_ACTION_TYPES from "./users.types";

export const USERS_INITIAL_STATE = {
  users: [],
  isLoading: false,
  error: null,
};

export const usersReducer = (
  state = USERS_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case USERS_ACTION_TYPES.FETCH_USERS_START:
      return { ...state, isLoading: true };
    case USERS_ACTION_TYPES.FETCH_USERS_SUCCESS:
      return { ...state, users: payload, isLoading: false, error: null };
    case USERS_ACTION_TYPES.FETCH_USERS_FAILED:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
};

