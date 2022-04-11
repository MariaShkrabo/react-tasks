import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../store/user/user.action";
import { UserInfoItem, UserItemContainer } from "./UserListItem.styles";

const UserListItem = ({user}) => {
    const {name, username, email, address} = user;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setUser(user));
        navigate(`/user-list/user/`);
    }
    
    return(
        <UserItemContainer onClick={handleClick}>
            <UserInfoItem><b>Username: </b>{username}</UserInfoItem>
            <UserInfoItem><b>Real Name: </b>{name}</UserInfoItem>
            <UserInfoItem><b>Email: </b>{email}</UserInfoItem>
            <UserInfoItem><b>Address: </b>{`${address.city}, ${address.street}`}</UserInfoItem>
        </UserItemContainer>
    )
}

export default UserListItem;
