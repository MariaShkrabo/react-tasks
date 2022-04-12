import axios from "axios";
import { createAction } from "../../utils/reducer.utils";
import USERS_ACTION_TYPES from "./users.types";


export const fetchUsersStart = () =>
  createAction(USERS_ACTION_TYPES.FETCH_USERS_START);

export const fetchUsersSuccess = (usersArray) =>
  createAction(
    USERS_ACTION_TYPES.FETCH_USERS_SUCCESS,
    usersArray
  );

export const fetchUsersFailure = (error) =>
  createAction(USERS_ACTION_TYPES.FETCH_USERS_FAILED, error);


export const fetchUsersStartAsync = () => {
  return async (dispatch) => {
    dispatch(fetchUsersStart());
    axios.get("https://jsonplaceholder.typicode.com/usrs")
      .then((response) => {
        dispatch(fetchUsersSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error));
      })
  };
};
