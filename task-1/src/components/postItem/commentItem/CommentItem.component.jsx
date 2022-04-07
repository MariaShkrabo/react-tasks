import { CommentBody, CommentContainer, CommentEmail, CommentName } from "./Comment.styles";

const CommentItem = ({ comment }) => {
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
