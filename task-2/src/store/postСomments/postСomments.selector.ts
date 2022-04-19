import { RootState } from "../root-reducer";
import { PostCommentsState } from "./postСomments.reducer";

export const selectPostComments = (state: RootState): PostCommentsState =>
  state.postComments;
