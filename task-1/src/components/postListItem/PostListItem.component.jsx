import { useNavigate } from "react-router-dom";
import { PostBody, PostItemContainer, PostTitle } from "./PostListItem.styles";
import { useContext } from "react";
import { PostContext } from "../../contexts/post.contexts";

const PostListItem = ({post}) => {
    const {title, body} = post;
    const navigate = useNavigate();
    const { setPostId } = useContext(PostContext);

    const click = () => {
        setPostId(post.id);
        navigate(`post`);
    }
    
    return(
        <PostItemContainer onClick={click}>
            <PostTitle>{title}</PostTitle>
            <PostBody>{body}</PostBody>
        </PostItemContainer>
    )
}

export default PostListItem;