import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPost } from "../../../store/post/post.action";
import { PostsItemBody, PostsItemContainer, PostsItemTitle } from "./userPostsListItem.styles";

const UserPostsListItem = ({post}) => {
    const {title, body} = post;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setPost(post));
        navigate(`post`);
    }
    
    return(
        <PostsItemContainer onClick={handleClick}>
            <PostsItemTitle>{title}</PostsItemTitle>
            <PostsItemBody>{body}</PostsItemBody>
        </PostsItemContainer>
    )
}

export default UserPostsListItem;
