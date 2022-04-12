import axios from "axios";
import { createAction } from "../../utils/reducer.utils";
import POST_COMMENTS_ACTION_TYPES from "./postСomments.types";

export const fetchPostCommentsStart = () =>
  createAction(POST_COMMENTS_ACTION_TYPES.FETCH_POST_COMMENTS_START);

export const fetchPostCommentsSuccess = (postCommentsArray) =>
  createAction(
    POST_COMMENTS_ACTION_TYPES.FETCH_POST_COMMENTS_SUCCESS,
    postCommentsArray
  );

export const fetchPostCommentsFailure = (error) =>
  createAction(POST_COMMENTS_ACTION_TYPES.FETCH_POST_COMMENTS_FAILED, error);


export const fetchPostCommentsStartAsync = (postId) => {
  return async (dispatch) => {
    dispatch(fetchPostCommentsStart());
      axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then((response) => {
          dispatch(fetchPostCommentsSuccess(response.data));
        })
        .catch((error) => {
          dispatch(fetchPostCommentsFailure(error));
        })
  };
};
