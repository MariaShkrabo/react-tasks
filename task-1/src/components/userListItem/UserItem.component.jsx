import { UserInfoItem, UserItemContainer } from "./UserItem.styles";


const UserItem = ({user}) => {
    const {name, username, email, address} = user;
    return(
        <UserItemContainer>
            <UserInfoItem><b>Username: </b>{username}</UserInfoItem>
            <UserInfoItem><b>Real Name: </b>{name}</UserInfoItem>
            <UserInfoItem><b>Email: </b>{email}</UserInfoItem>
            <UserInfoItem><b>Address: </b>{`${address.city}, ${address.street}`}</UserInfoItem>
        </UserItemContainer>
    )
}

export default UserItem;