import { useEffect, useState } from "react";
import axios from "axios";
import PostItem from "../../components/postItem/PostItem.component";
import { useSelector } from "react-redux";
import { selectPost } from "../../store/post/post.selector";

const Post = () => {
    const post = useSelector(selectPost);
    const [comments, setComments] = useState([]);
    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
        .then((response) => {
            setComments(response.data);
        })
        .catch((e) => {
            console.log(`😱 Axios request failed: ${e}`);
        })

        axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then((response) => {
            setUser(response.data);
        })

    }, []);

    return <PostItem post={post} comments={comments} user={user}/>
}

export default Post;
