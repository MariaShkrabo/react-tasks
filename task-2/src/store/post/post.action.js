import { createAction } from "../../utils/reducer.utils";
import POST_ACTION_TYPES from "./post.types";

export const setPost = (post) =>
  createAction(POST_ACTION_TYPES.SET_CURRENT_POST, post);
