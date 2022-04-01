import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user.contexts";
import { UserInfoItem, UserItemContainer } from "./UserListItem.styles";


const UserListItem = ({user}) => {
    const {name, username, email, address} = user;
    const navigate = useNavigate();
    const { setUserId } = useContext(UserContext);

    const click = () => {
        setUserId(user.id);
        navigate(`/user-list/user/`);
    }
    return(
        <UserItemContainer onClick={click}>
            <UserInfoItem><b>Username: </b>{username}</UserInfoItem>
            <UserInfoItem><b>Real Name: </b>{name}</UserInfoItem>
            <UserInfoItem><b>Email: </b>{email}</UserInfoItem>
            <UserInfoItem><b>Address: </b>{`${address.city}, ${address.street}`}</UserInfoItem>
        </UserItemContainer>
    )
}

export default UserListItem;