import { useState, useContext, useEffect } from "react";
import axios from "axios";
import UserList from "../../components/userListComponent/UserList.component";

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => {
            setUsers(response.data)
        })
        .catch((e) => {
            console.log(`😱 Axios request failed: ${e}`);
        })
    }, []);

    return <UserList users={users}/>
}

export default UsersPage;