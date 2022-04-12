import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectPostComments, selectPostCommentsError, selectPostCommentsIsLoading } from "../../store/postСomments/postСomments.selector";
import FailureWarning from "../failureWarning/failureWarning.component";
import Spinner from "../spinner/spinner.component";
import CommentItem from "./commentItem/CommentItem.component";
import { AuthorInfoContainer, AuthorInfoItem, AuthorInfoTitle, CommentsContainer, CommentsTitle, PostContainer, PostMainInfoBody, PostMainInfoContainer, PostMainInfoTitle } from "./PostItem.styles";

const PostItem = ({post, user}) => {
    const comments = useSelector(selectPostComments);
    const commentsIsLoading = useSelector(selectPostCommentsIsLoading);
    const commentsError = useSelector(selectPostCommentsError);
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
                    <Fragment>
                    {commentsError != null ? 
                        <FailureWarning text={`Post Comments Weren't Received`} />
                        :
                        <Fragment>
                            <CommentsTitle>Comments</CommentsTitle>
                            {comments.map((comment) => (
                                <CommentItem key={comment.id} comment={comment}/>
                            ))}
                        </Fragment>
                    }
                    </Fragment>    
                }
            </CommentsContainer>
        </PostContainer>
    )
}

export default PostItem;
