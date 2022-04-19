import { useEffect } from "react";
import PostList from "../../components/postListComponent/PostList.component";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../../store/posts/posts.action";

 const Home = () => {
    const dispatch = useDispatch();
     
    useEffect(() => {
        dispatch(fetchPosts());
      }, []);
    
    return <PostList/>
}

export default Home;
