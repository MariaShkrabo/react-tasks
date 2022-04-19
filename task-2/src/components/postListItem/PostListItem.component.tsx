import { useNavigate } from "react-router-dom";
import { PostBody, PostItemContainer, PostTitle } from "./PostListItem.styles";
import { useDispatch } from "react-redux";
import { setPost } from "../../store/post/post.action";
import { Post } from "../../store/posts/posts.reducer";

type PostListItemProps = {
    post: Post;
} 

const PostListItem = ({post}: PostListItemProps) => {
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
