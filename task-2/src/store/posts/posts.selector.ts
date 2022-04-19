import { RootState } from "../root-reducer";
import { PostsState } from "./posts.reducer";

export const selectPosts = (state: RootState): PostsState =>
  state.posts;