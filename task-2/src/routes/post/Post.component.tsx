import { useEffect } from "react";
import PostItem from "../../components/postItem/PostItem.component";
import { useDispatch } from "react-redux";
import { selectPost } from "../../store/post/post.selector";
import { fetchPostComments } from "../../store/postСomments/postСomments.action";
import { useTypedSelector } from "../../utils/selector/selector.utils";

const Post = () => {
    const { post } = useTypedSelector(selectPost);
    const dispatch = useDispatch();

    useEffect(() => {
        if(post){
            dispatch(fetchPostComments(post.id));
        }
    }, []);

    return <PostItem/>
}

export default Post;
