import PostListItem from "../postListItem/PostListItem.component";
import { PostListContainer } from "./PostList.styles";

const PostList = ({posts}) => {
    return (
        <PostListContainer>
            {posts.map((post) => (
                <PostListItem key={post.id} post={post}/>
            ))}
        </PostListContainer>
        )     
    }

export default PostList;