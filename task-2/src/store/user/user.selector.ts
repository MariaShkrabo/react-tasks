import { RootState } from "../root-reducer";
import { UserState } from "./user.reducer";

export const selectUser = (state: RootState): UserState => state.user;
