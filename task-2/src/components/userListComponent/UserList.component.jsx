import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectUsers, selectUsersError, selectUsersIsLoading } from "../../store/users/users.selector";
import FailureWarning from "../failureWarning/failureWarning.component";
import Spinner from "../spinner/spinner.component";
import UserListItem from "../userListItem/UserListItem.component";
import { UserListContainer } from "./UserList.styles";

const UserList = () => {
    const users = useSelector(selectUsers);
    const isLoading = useSelector(selectUsersIsLoading);
    const isError = useSelector(selectUsersError);
    return(
        <Fragment>
            {isLoading ? 
                <Spinner />
                :
                <Fragment>
                {isError != null ? 
                    <FailureWarning text={`Users Weren't Received`} />
                    :
                    <UserListContainer>
                        {users.map((user) => (
                            <UserListItem key={user.id} user={user}/>
                        ))}
                    </UserListContainer>
                }
                </Fragment>    
            }
        </Fragment> 
     )    
}

export default UserList;


