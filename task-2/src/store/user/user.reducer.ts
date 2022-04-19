import { User } from "../users/users.reducer";
import { UserAction } from "./user.action";
import { USER_ACTION_TYPES } from "./user.types";

export interface UserState {
  user: User | null;
}

export const USER_INITIAL_STATE = {
  user: null,
};

export const userReducer = (state: UserState = USER_INITIAL_STATE, action: UserAction): UserState => {
  switch(action.type) {
      case USER_ACTION_TYPES.SET_CURRENT_USER:
          return {
              ...state, user: action.payload
          } 
      default: 
          return state;
  }
}


