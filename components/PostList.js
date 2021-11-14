import postStyle from "../styles/Post.module.css";
import PostItem from "./PostItem";
const PostList = ({ posts }) => {
    return (
        <div className={postStyle.grid}>
        {posts.map((post) => (
          // eslint-disable-next-line react/jsx-key
        <PostItem key={post.id} post={post} />
        ))}
      </div>
    )
}

export default PostList

