import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectPost } from "../../store/post/post.selector";
import { selectPostComments, selectPostCommentsError, selectPostCommentsIsLoading } from "../../store/postСomments/postСomments.selector";
import { selectUsers } from "../../store/users/users.selector";
import FailureWarning from "../failureWarning/failureWarning.component";
import Spinner from "../spinner/spinner.component";
import CommentItem from "./commentItem/CommentItem.component";
import { AuthorInfoContainer, AuthorInfoItem, AuthorInfoTitle, CommentsContainer, CommentsTitle, PostContainer, PostMainInfoBody, PostMainInfoContainer, PostMainInfoTitle } from "./PostItem.styles";

const PostItem = () => {
    const comments = useSelector(selectPostComments);
    const commentsIsLoading = useSelector(selectPostCommentsIsLoading);
    const commentsError = useSelector(selectPostCommentsError);
    const post = useSelector(selectPost);
    //looking for the user who wrote the post
    const user = useSelector(selectUsers).find(user => user.id === post.userId);
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
                {commentsIsLoading ? 
                    <Spinner />
                    :
                    <>
                    {commentsError ? 
                        <FailureWarning text={`Post Comments Weren't Received`} />
                        :
                        <>
                            <CommentsTitle>Comments</CommentsTitle>
                            {comments.map((comment) => (
                                <CommentItem key={comment.id} comment={comment}/>
                            ))}
                        </>
                    }
                    </>    
                }
            </CommentsContainer>
        </PostContainer>
    )
}

export default PostItem;
