import { useSelector } from "react-redux";
import { selectPosts, selectPostsError, selectPostsIsLoading } from "../../store/posts/posts.selector";
import PostListItem from "../postListItem/PostListItem.component";
import { PostListContainer } from "./PostList.styles";
import Spinner from "../spinner/spinner.component";
import { Fragment } from "react";
import FailureWarning from "../failureWarning/failureWarning.component";

const PostList = () => {
    const posts = useSelector(selectPosts);
    const isLoading = useSelector(selectPostsIsLoading);
    const isError = useSelector(selectPostsError);
     return(
        <Fragment>
            {isLoading ? 
                <Spinner />
                :
                <Fragment>
                {isError != null ? 
                    <FailureWarning text={`Posts Weren't Received`} />
                    :
                    <PostListContainer>
                        {posts.map((post) => (
                            <PostListItem key={post.id} post={post}/>
                        ))}
                    </PostListContainer>
                }
                </Fragment>    
            }
        </Fragment> 
     )    
}

export default PostList;
