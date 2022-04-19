import { RootState } from "../root-reducer";
import { UsersState } from "./users.reducer";

export const selectUsers = (state: RootState): UsersState => state.users;
