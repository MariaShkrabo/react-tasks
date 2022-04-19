import { PostsActions } from "./posts.action";
import { POSTS_ACTION_TYPES } from "./posts.types";

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export interface PostsState {
  posts: Post[];
  isLoading: boolean;
  error: string | null;
}

export const POSTS_INITIAL_STATE = {
  posts: [],
  isLoading: false,
  error: null,
};

export const postsReducer = (state: PostsState = POSTS_INITIAL_STATE, action: PostsActions): PostsState => {
  switch(action.type) {
      case POSTS_ACTION_TYPES.FETCH_POSTS_START:
          return {
              ...state, isLoading: true 
          } 
      case POSTS_ACTION_TYPES.FETCH_POSTS_SUCCESS:
          return {
            ...state, posts: action.payload, isLoading: false, error: null
          }
      case POSTS_ACTION_TYPES.FETCH_POSTS_FAILED:
          return {
            ...state, error: action.payload, isLoading: false 
          }
      default: 
          return state;
  }
}
