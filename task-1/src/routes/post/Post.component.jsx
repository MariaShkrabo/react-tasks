import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { PostContext } from "../../contexts/post.contexts";
import PostItem from "../../components/postItem/PostItem.component";
import { UserContext } from "../../contexts/user.contexts";

const Post = () => {
    const { postId } = useContext(PostContext);
    const { userId } = useContext(UserContext);
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((response) => {
            setPost(response.data); 
        })
        .catch((e) => {
            console.log(`😱 Axios request failed: ${e}`);
        })

        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then((response) => {
            setComments(response.data);
        })
        .catch((e) => {
            console.log(`😱 Axios request failed: ${e}`);
        })

        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => {
            setUser(response.data);
        })

    }, []);

    

    return <PostItem post={post} comments={comments} user={user}/>
}

export default Post;
