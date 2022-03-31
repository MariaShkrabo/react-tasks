import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import PostList from "../../components/postListComponent/PostList.component";

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            setPosts(response.data)
        })
    }, []);

    return <PostList posts={posts}/>
}

export default Home;