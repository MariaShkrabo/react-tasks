import { User } from "../users/users.reducer";
import { UserState } from "./user.reducer";
import { USER_ACTION_TYPES } from "./user.types";


export interface UserAction {
  type: USER_ACTION_TYPES.SET_CURRENT_USER;
  payload: User;
}

export const setUser = (user: UserState) => {
  return ({
    type: USER_ACTION_TYPES.SET_CURRENT_USER,
    payload: user
  });
}