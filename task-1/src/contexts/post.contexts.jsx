import { useState } from "react";
import { createContext } from "react";

export const PostContext = createContext({
    postId: 1,
    setPostId: () => {},
});

export const PostProvider = ( { children } ) => {
    const [postId, setPostId] = useState(1);
    const value = {postId, setPostId};
    return <PostContext.Provider value={value}>{children}</PostContext.Provider>
}