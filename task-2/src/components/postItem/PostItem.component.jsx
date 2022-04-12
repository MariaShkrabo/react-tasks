import CommentItem from "./commentItem/CommentItem.component";
import { AuthorInfoContainer, AuthorInfoItem, AuthorInfoTitle, CommentsContainer, CommentsTitle, PostContainer, PostMainInfoBody, PostMainInfoContainer, PostMainInfoTitle } from "./PostItem.styles";

const PostItem = ({post, comments, user}) => {
    return(
        <PostContainer>
            <AuthorInfoContainer>
                <AuthorInfoTitle>Author:</AuthorInfoTitle>
                <AuthorInfoItem>Username: {user.username}</AuthorInfoItem>
                <AuthorInfoItem>Real name: {user.name}</AuthorInfoItem>
                <AuthorInfoItem>Email: {user.email}</AuthorInfoItem>
            </AuthorInfoContainer>
            <PostMainInfoContainer>
                <PostMainInfoTitle>{post.title}</PostMainInfoTitle>
                <PostMainInfoBody>{post.body}</PostMainInfoBody>
            </PostMainInfoContainer>
            <CommentsContainer>
                <CommentsTitle>Comments</CommentsTitle>
                {comments.map((comment) => (
                        <CommentItem key={comment.id} comment={comment}/>
                ))}
            </CommentsContainer>
        </PostContainer>
    )
}

export default PostItem;
