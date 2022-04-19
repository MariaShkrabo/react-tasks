import { selectPost } from "../../store/post/post.selector";
import { selectPostComments } from "../../store/postСomments/postСomments.selector";
import { selectUsers } from "../../store/users/users.selector";
import { useTypedSelector } from "../../utils/selector/selector.utils";
import FailureWarning from "../failureWarning/failureWarning.component";
import Spinner from "../spinner/spinner.component";
import CommentItem from "./commentItem/CommentItem.component";
import { AuthorInfoContainer, AuthorInfoItem, AuthorInfoTitle, CommentsContainer, CommentsTitle, PostContainer, PostMainInfoBody, PostMainInfoContainer, PostMainInfoTitle } from "./PostItem.styles";

const PostItem = () => {
    const { post } = useTypedSelector(selectPost);
    //looking for the user who wrote the post
    let postID: number;

    post ? postID = post.userId : postID = 0;
    
    const user = useTypedSelector(selectUsers)["users"].find(user => user.id === postID);
    const { comments, commentsIsLoading, commentsError } = useTypedSelector(selectPostComments);
    
    return(
        <PostContainer>
            {user ?
            <AuthorInfoContainer>
                <AuthorInfoTitle>Author:</AuthorInfoTitle>
                <AuthorInfoItem>Username: {user.username}</AuthorInfoItem>
                <AuthorInfoItem>Real name: {user.name}</AuthorInfoItem>
                <AuthorInfoItem>Email: {user.email}</AuthorInfoItem>
            </AuthorInfoContainer>
            :<FailureWarning text={`User Was't Received`} />
            }
            {post ?
            <PostMainInfoContainer>
                <PostMainInfoTitle>{post.title}</PostMainInfoTitle>
                <PostMainInfoBody>{post.body}</PostMainInfoBody>
            </PostMainInfoContainer>
            :<FailureWarning text={`Post Was't Received`} />
            }

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
