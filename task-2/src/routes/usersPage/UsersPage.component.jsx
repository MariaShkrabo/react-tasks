import { useEffect } from "react";
import UserList from "../../components/userListComponent/UserList.component";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../../store/users/users.action";

const UsersPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return <UserList/>
}

export default UsersPage;
