import { selectPosts } from "../../store/posts/posts.selector";
import { selectUser } from "../../store/user/user.selector";
import { useTypedSelector } from "../../utils/selector/selector.utils";
import FailureWarning from "../failureWarning/failureWarning.component";
import { UserInfo, UserInfoItem, UserItemContainer, UsersPostsList } from "./UserItem.styles";
import UserPostsListItem from "./userPostsListItem/userPostsListItem.component";

const UserItem = () => {
    const { user } = useTypedSelector(selectUser);

    let userID: number;
    user ? userID = user.id : userID = 0;

    const posts = useTypedSelector(selectPosts)["posts"].filter(post => post.userId === userID);
    return(
        <UserItemContainer>
            {user ? 
            <><UserInfo>
                <UserInfoItem><b>Username: </b>{user.username}</UserInfoItem>
                <UserInfoItem><b>Real Name: </b>{user.name}</UserInfoItem>
                <UserInfoItem><b>Email: </b>{user.email}</UserInfoItem>
                <UserInfoItem><b>Address: </b>{`${user.address.city}, ${user.address.street}, ${user.address.suite}, ${user.address.zipcode}`}</UserInfoItem>
                <UserInfoItem><b>Phone: </b>{`${user.phone.split(" ")[0]}`}</UserInfoItem>
                <UserInfoItem><b>Website: </b>{`${user.website}`}</UserInfoItem>  
                <UserInfoItem><b>Company: </b>{`${user.company.name}`}</UserInfoItem> 
            </UserInfo>
            <UsersPostsList>
                {posts.map((post) => (
                    <UserPostsListItem key={post.id} post={post}/>
                ))}
            </UsersPostsList></>
            : <FailureWarning text={`User Info Was't Received`} />}
        </UserItemContainer>
    )
}

export default UserItem;
