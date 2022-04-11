import { useState, useEffect } from "react";
import axios from "axios";
import UserItem from "../../components/userItem/UserItem.component";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/user.selector";

const User = () => {
    const user = useSelector(selectUser);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
        .then((response) => {
            setPosts(response.data);
        })
        .catch((e) => {
            console.log(`😱 Axios request failed: ${e}`);
        })
    }, []);

    return <UserItem user={user} posts={posts}/>
}

export default User;
