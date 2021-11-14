import postStyle from "../styles/Post.module.css";
import Link from "next/link";

const PostItem = ({ post }) => (
  <Link href="/post/[id]" as={`/post/${post.id}`}>
    <a className={postStyle.card}>
      <h3>{post.title} &rarr;</h3>
      <p>{post.body}</p>
    </a>
  </Link>
);

export default PostItem;
