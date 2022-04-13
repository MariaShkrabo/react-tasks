import axios from "axios";
import { createAction } from "../../utils/reducer.utils";
import POSTS_ACTION_TYPES from "./posts.types";

export const fetchPostsStart = () =>
  createAction(POSTS_ACTION_TYPES.FETCH_POSTS_START);

export const fetchPostsSuccess = (postsArray) =>
  createAction(
    POSTS_ACTION_TYPES.FETCH_POSTS_SUCCESS,
    postsArray
  );

export const fetchPostsFailure = (error) =>
  createAction(POSTS_ACTION_TYPES.FETCH_POSTS_FAILED, error);


export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(fetchPostsStart());
      axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          dispatch(fetchPostsSuccess(response.data));
        })
        .catch((error) => {
          dispatch(fetchPostsFailure(error));
        })
  };
};
