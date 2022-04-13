import { useEffect } from "react";
import PostItem from "../../components/postItem/PostItem.component";
import { useDispatch, useSelector } from "react-redux";
import { selectPost } from "../../store/post/post.selector";
import { fetchPostComments } from "../../store/postСomments/postСomments.action";

const Post = () => {
    const post = useSelector(selectPost);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPostComments(post.id));
    }, []);

    return <PostItem/>
}

export default Post;
