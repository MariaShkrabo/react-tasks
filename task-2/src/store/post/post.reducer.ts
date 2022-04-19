import { Post } from "../posts/posts.reducer";
import { PostAction } from "./post.action";
import { POST_ACTION_TYPES } from "./post.types";

export interface PostState {
  post: Post | null;
}

export const POST_INITIAL_STATE = {
  post: null,
};

export const postReducer = (state: PostState = POST_INITIAL_STATE, action: PostAction): PostState => {
  switch(action.type) {
      case POST_ACTION_TYPES.SET_CURRENT_POST:
          return {
              ...state, post: action.payload
          } 
      default: 
          return state;
  }
}



