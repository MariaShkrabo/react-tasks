import { combineReducers } from "redux";
import { postReducer } from "./post/post.reducer";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    post: postReducer,
})