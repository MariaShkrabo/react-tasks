import { useEffect, useState } from "react";
import axios from "axios";
import PostItem from "../../components/postItem/PostItem.component";
import { useDispatch, useSelector } from "react-redux";
import { selectPost } from "../../store/post/post.selector";
import { fetchPostCommentsStartAsync } from "../../store/postСomments/postСomments.action";

const Post = () => {
    const post = useSelector(selectPost);
    const [user, setUser] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPostCommentsStartAsync(post.id));
        axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then((response) => {
            setUser(response.data);
        })

    }, []);

    return <PostItem post={post} user={user}/>
}

export default Post;
