import PostListItem from "../postListItem/PostListItem.component";
import { PostListContainer } from "./PostList.styles";
import Spinner from "../spinner/spinner.component";
import { Fragment } from "react";
import FailureWarning from "../failureWarning/failureWarning.component";
import { useTypedSelector } from "../../utils/selector/selector.utils";
import { selectPosts } from "../../store/posts/posts.selector";

const PostList = () => {
    const { posts, isLoading, error } = useTypedSelector(selectPosts);

    return(
        <Fragment>
            {isLoading ? 
                <Spinner />
                :
                <>
                {error ? 
                    <FailureWarning text={`Posts Weren't Received`} />
                    :
                    <PostListContainer>
                        {posts.map((post) => (
                            <PostListItem key={post.id} post={post}/>
                        ))}
                    </PostListContainer>
                }
                </>    
            }
        </Fragment> 
     )    
}

export default PostList;
