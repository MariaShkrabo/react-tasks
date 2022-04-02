import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PostContext } from "../../../contexts/post.contexts";
import { UserContext } from "../../../contexts/user.contexts";
import { PostsItemBody, PostsItemContainer, PostsItemTitle } from "./userPostsListItem.styles";

const UserPostsListItem = ({post}) => {
    const {title, body} = post;
    const navigate = useNavigate();
    const { setPostId } = useContext(PostContext);
    const { setUserId } = useContext(UserContext);

    const click = () => {
        setPostId(post.id);
        setUserId(post.userId);
        navigate(`post`);
    }
    
    return(
        <PostsItemContainer onClick={click}>
            <PostsItemTitle>{title}</PostsItemTitle>
            <PostsItemBody>{body}</PostsItemBody>
        </PostsItemContainer>
    )
}

export default UserPostsListItem;