import axios from "axios";
import { Dispatch } from "redux";
import { User } from "./users.reducer";
import { USERS_ACTION_TYPES } from "./users.types";

interface fetchUsersStart {
  type: USERS_ACTION_TYPES.FETCH_USERS_START;
}

interface fetchUsersSuccess {
  type: USERS_ACTION_TYPES.FETCH_USERS_SUCCESS;
  payload: User[];
}

interface fetchUsersFail {
  type: USERS_ACTION_TYPES.FETCH_USERS_FAILED;
  payload: string ;
}

export type UsersActions = fetchUsersStart | fetchUsersSuccess | fetchUsersFail;


export const fetchUsers = () => {
  return async (dispatch: Dispatch<UsersActions>) => {
      dispatch({
        type:  USERS_ACTION_TYPES.FETCH_USERS_START
      });
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          dispatch({
            type: USERS_ACTION_TYPES.FETCH_USERS_SUCCESS,
            payload: response.data  
          });
        })
        .catch((error) => {
          dispatch({
            type: USERS_ACTION_TYPES.FETCH_USERS_FAILED,
            payload: error.message
          });
        });
      };
    };





