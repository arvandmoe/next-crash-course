import { useRouter } from "next/router";
import Link from 'next/link';

const Post = ({ post }) => {
  const router = useRouter();
  const { id } = router.query;
  return (<div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <br/>
      <Link href="/"> Go Back </Link>
      </div>);
};

export default Post;

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const post = await res.json();
  console.log(post);
  return {
    props: {
      post,
    },
  };
};
