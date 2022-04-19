import { UsersActions } from "./users.action";
import { USERS_ACTION_TYPES } from "./users.types";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: number;
      lng: number;
    }
  }
}

export interface UsersState {
  users: User[];
  isLoading: boolean;
  error: string | null;
}

export const USERS_INITIAL_STATE = {
  users: [],
  isLoading: false,
  error: null,
};

export const usersReducer = (state: UsersState = USERS_INITIAL_STATE, action: UsersActions): UsersState => {
  switch(action.type) {
      case USERS_ACTION_TYPES.FETCH_USERS_START:
          return {
              ...state, isLoading: true 
          } 
      case USERS_ACTION_TYPES.FETCH_USERS_SUCCESS:
          return {
            ...state, users: action.payload, isLoading: false, error: null
          }
      case USERS_ACTION_TYPES.FETCH_USERS_FAILED:
          return {
            ...state, error: action.payload, isLoading: false 
          }
      default: 
          return state;
  }
}

