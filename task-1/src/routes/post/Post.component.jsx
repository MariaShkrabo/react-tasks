import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { PostContext } from "../../contexts/post.contexts";
import PostItem from "../../components/postItem/PostItem.component";

const Post = () => {
    const { postId } = useContext(PostContext);
    const [post, setPost] = useState({});
    console.log(postId);

    useEffect(() => {
        console.log(postId);
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((response) => {
            setPost(response.data);
        })
        .catch((e) => {
            console.log(`😱 Axios request failed: ${e}`);
        })
    }, []);

    return <PostItem post={post}/>
}

export default Post;