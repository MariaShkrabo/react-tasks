import { PostBody, PostItemContainer, PostTitle } from "../postListItem/PostListItem.styles";

const PostItem = ({post}) => {
    const {title, body} = post;
    return(
        <PostItemContainer>
            <PostTitle>{title}</PostTitle>
            <PostBody>{body}</PostBody>
        </PostItemContainer>
    )
}

export default PostItem;