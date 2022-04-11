import { useNavigate } from "react-router-dom";
import { PostBody, PostItemContainer, PostTitle } from "./PostListItem.styles";
import { useDispatch } from "react-redux";
import { setPost } from "../../store/post/post.action";

const PostListItem = ({post}) => {
    const {title, body} = post;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setPost(post));
        navigate(`post`);
    }
    
    return(
        <PostItemContainer onClick={handleClick}>
            <PostTitle>{title}</PostTitle>
            <PostBody>{body}</PostBody>
        </PostItemContainer>
    )
}

export default PostListItem;
