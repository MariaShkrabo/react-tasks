import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../../contexts/user.contexts";
import UserItem from "../../components/userItem/UserItem.component";

const User = () => {
    const { userId } = useContext(UserContext);
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => {
            setUser(response.data);
        })
        .catch((e) => {
            console.log(`😱 Axios request failed: ${e}`);
        })

        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
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