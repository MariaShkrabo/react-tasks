import { Fragment } from "react";
import { selectUsers } from "../../store/users/users.selector";
import { useTypedSelector } from "../../utils/selector/selector.utils";
import FailureWarning from "../failureWarning/failureWarning.component";
import Spinner from "../spinner/spinner.component";
import UserListItem from "../userListItem/UserListItem.component";
import { UserListContainer } from "./UserList.styles";

const UserList = () => {
    const { users, isLoading, isError } = useTypedSelector(selectUsers);
    
    return(
        <Fragment>
            {isLoading ? 
                <Spinner />
                :
                <>
                {isError ? 
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


