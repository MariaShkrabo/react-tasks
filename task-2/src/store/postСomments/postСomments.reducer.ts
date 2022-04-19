import { PostCommentsActions } from "./postСomments.action";
import { POST_COMMENTS_ACTION_TYPES } from "./postСomments.types";

export interface PostComments {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

export interface PostCommentsState {
  comments: PostComments[];
  commentsIsLoading: boolean;
  commentsError: string | null;
}

export const POST_COMMENTS_INITIAL_STATE = {
  comments: [],
  commentsIsLoading: false,
  commentsError: null,
};

export const postCommentsReducer = (state: PostCommentsState = POST_COMMENTS_INITIAL_STATE, action: PostCommentsActions): PostCommentsState => {
  switch(action.type) {
      case POST_COMMENTS_ACTION_TYPES.FETCH_POST_COMMENTS_START:
          return {
              ...state, commentsIsLoading: true 
          } 
      case POST_COMMENTS_ACTION_TYPES.FETCH_POST_COMMENTS_SUCCESS:
          return {
            ...state, comments: action.payload, commentsIsLoading: false, commentsError: null
          }
      case POST_COMMENTS_ACTION_TYPES.FETCH_POST_COMMENTS_FAILED:
          return {
            ...state, commentsError: action.payload, commentsIsLoading: false 
          }
      default: 
          return state;
  }
}