import { combineReducers } from "redux";
import { postReducer } from "./post/post.reducer";
import { postsReducer } from "./posts/posts.reducer";
import { postCommentsReducer } from "./postСomments/postСomments.reducer";
import { userReducer } from "./user/user.reducer";
import { usersReducer } from "./users/users.reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    post: postReducer,
    posts: postsReducer,
    users: usersReducer,
    postComments: postCommentsReducer,
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
