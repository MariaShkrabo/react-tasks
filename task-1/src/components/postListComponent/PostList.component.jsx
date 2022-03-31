import PostItem from "../postListItem/PostItem.component";
import { PostListContainer } from "./PostList.styles";

const PostList = ({posts}) => {
    return (
        <PostListContainer>
            {posts.map((post) => (
                <PostItem key={post.id} post={post}/>
            ))}
        </PostListContainer>
        )
        
    }

export default PostList;