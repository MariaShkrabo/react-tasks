import UserListItem from "../userListItem/UserListItem.component";
import { UserListContainer } from "./UserList.styles";

const UserList = ({users}) => {
    return (
        <UserListContainer>
            {users.map((user) => (
                <UserListItem key={user.id} user={user}/>
            ))}
        </UserListContainer>
        )
        
    }

export default UserList;