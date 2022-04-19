import { RootState } from "../root-reducer";
import { PostState } from "./post.reducer";

export const selectPost = (state: RootState): PostState => state.post;
