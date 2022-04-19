import axios from "axios";
import { Dispatch } from "redux";
import { PostComments } from "./postСomments.reducer";
import { POST_COMMENTS_ACTION_TYPES } from "./postСomments.types";

interface PostCommentsStart {
  type: POST_COMMENTS_ACTION_TYPES.FETCH_POST_COMMENTS_START;
}

interface PostCommentsSuccess {
  type: POST_COMMENTS_ACTION_TYPES.FETCH_POST_COMMENTS_SUCCESS
  payload: PostComments[];
}

interface PostCommentsFail {
  type: POST_COMMENTS_ACTION_TYPES.FETCH_POST_COMMENTS_FAILED
  payload: string ;
}

export type PostCommentsActions = PostCommentsStart | PostCommentsSuccess | PostCommentsFail;


export const fetchPostComments = (postId: number) => {
  return async (dispatch: Dispatch<PostCommentsActions>) => {
      dispatch({
        type: POST_COMMENTS_ACTION_TYPES.FETCH_POST_COMMENTS_START
      });
      axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then((response) => {
          dispatch({
            type: POST_COMMENTS_ACTION_TYPES.FETCH_POST_COMMENTS_SUCCESS,
            payload: response.data  
          });
        })
        .catch((error) => {
          dispatch({
            type: POST_COMMENTS_ACTION_TYPES.FETCH_POST_COMMENTS_FAILED,
            payload: error.message
          });
        });
      };
    };

