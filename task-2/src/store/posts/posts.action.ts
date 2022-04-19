import axios from "axios";
import { Dispatch } from "redux";
import { Post } from "./posts.reducer";
import { POSTS_ACTION_TYPES } from "./posts.types";

interface fetchPostsStart {
  type: POSTS_ACTION_TYPES.FETCH_POSTS_START;
}

interface fetchPostsSuccess {
  type: POSTS_ACTION_TYPES.FETCH_POSTS_SUCCESS;
  payload: Post[];
}

interface fetchPostsFail {
  type: POSTS_ACTION_TYPES.FETCH_POSTS_FAILED;
  payload: string ;
}

export type PostsActions = fetchPostsStart | fetchPostsSuccess | fetchPostsFail;


export const fetchPosts = () => {
  return async (dispatch: Dispatch<PostsActions>) => {
      dispatch({
        type:  POSTS_ACTION_TYPES.FETCH_POSTS_START
      });
      axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          dispatch({
            type: POSTS_ACTION_TYPES.FETCH_POSTS_SUCCESS,
            payload: response.data  
          });
        })
        .catch((error) => {
          dispatch({
            type: POSTS_ACTION_TYPES.FETCH_POSTS_FAILED,
            payload: error.message
          });
        });
      };
    };
