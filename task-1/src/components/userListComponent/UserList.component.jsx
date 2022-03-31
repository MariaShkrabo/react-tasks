import UserItem from "../userListItem/UserItem.component";
import { UserListContainer } from "./UserList.styles";

const UserList = ({users}) => {
    return (
        <UserListContainer>
            {users.map((user) => (
                <UserItem key={user.id} user={user}/>
            ))}
        </UserListContainer>
        )
        
    }

export default UserList;