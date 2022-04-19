import { Post } from "../posts/posts.reducer";
import { POST_ACTION_TYPES } from "./post.types";

export interface PostAction {
  type: POST_ACTION_TYPES.SET_CURRENT_POST;
  payload: Post;
}

export const setPost = (post: Post) => {
  return ({
    type: POST_ACTION_TYPES.SET_CURRENT_POST,
    payload: post
  });
}