import { Fragment } from "react";
import { UserInfo, UserInfoItem, UserItemContainer, UsersPostsList } from "./UserItem.styles";
import UserPostsListItem from "./userPostsListItem/userPostsListItem.component";

const UserItem = ({user, posts}) => {
    const {name, username, email, address, phone, website, company} = user;
    
    return(
        <UserItemContainer>
            <UserInfo>
                <UserInfoItem><b>Username: </b>{username}</UserInfoItem>
                <UserInfoItem><b>Real Name: </b>{name}</UserInfoItem>
                <UserInfoItem><b>Email: </b>{email}</UserInfoItem>
                <UserInfoItem><b>Website: </b>{`${website}`}</UserInfoItem>
                {address && phone && company? 
                <Fragment>
                    <UserInfoItem><b>Address: </b>{`${address.city}, ${address.street}, ${address.suite}, ${address.zipcode}`}</UserInfoItem>
                    <UserInfoItem><b>Phone: </b>{`${phone.split(" ")[0]}`}</UserInfoItem>  
                    <UserInfoItem><b>Company: </b>{`${company.name}`}</UserInfoItem>
                    </Fragment>
                :<UserInfoItem><b>Info: ?</b></UserInfoItem>
                }
            </UserInfo>
            <UsersPostsList>
                {posts.map((post) => (
                    <UserPostsListItem key={post.id} post={post}/>
                ))}
            </UsersPostsList>
        </UserItemContainer>
    )
}

export default UserItem;
