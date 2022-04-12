import { useEffect } from "react";
import UserList from "../../components/userListComponent/UserList.component";
import { useDispatch } from "react-redux";
import { fetchUsersStartAsync } from "../../store/users/users.action";

const UsersPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsersStartAsync());
    }, []);

    return <UserList/>
}

export default UsersPage;