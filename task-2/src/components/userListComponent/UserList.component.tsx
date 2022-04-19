import { Fragment } from "react";
import { selectUsers } from "../../store/users/users.selector";
import { useTypedSelector } from "../../utils/selector/selector.utils";
import FailureWarning from "../failureWarning/failureWarning.component";
import Spinner from "../spinner/spinner.component";
import UserListItem from "../userListItem/UserListItem.component";
import { UserListContainer } from "./UserList.styles";

const UserList = () => {
    const { users, isLoading, error } = useTypedSelector(selectUsers);
    
    return(
        <Fragment>
            {isLoading ? 
                <Spinner />
                :
                <>
                {error ? 
                    <FailureWarning text={`Users Weren't Received`} />
                    :
                    <UserListContainer>
                        {users.map((user) => (
                            <UserListItem key={user.id} user={user}/>
                        ))}
                    </UserListContainer>
                }
                </>    
            }
        </Fragment> 
     )    
}

export default UserList;


