import { PostComments } from "../../../store/postСomments/postСomments.reducer";
import { CommentBody, CommentContainer, CommentEmail, CommentName } from "./Comment.styles";

type CommentProps = {
    comment: PostComments;
} 

const CommentItem = ({ comment }: CommentProps) => {
    const { name, email, body } = comment;
    return (
        <CommentContainer>
            <CommentName>{name}</CommentName>
            <CommentBody>{body}</CommentBody>
            <CommentEmail>{email}</CommentEmail>
        </CommentContainer>
    )
}

export default CommentItem;
