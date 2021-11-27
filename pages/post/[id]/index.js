import { useRouter } from "next/router";
import Link from "next/link";
import {server} from "../../../config";

const Post = ({ post }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <br />
      <Link href="/"> Go Back </Link>
    </div>
  );
};

export default Post;

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const post = await res.json();
//   console.log(post);
//   return {
//     props: {
//       post,
//     },
//   };
// };
//
// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const posts = await res.json();
//
//   const ids = posts.map(post => post.id);
//   const paths =  ids.map(id => ({ params:  {id : id.toString()} }));
//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getStaticProps = async (context) => {
  const res = await fetch(
      `${server}/api/articles/${context.params.id}`
  );
  const post = await res.json();
  console.log(post);
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);
  const posts = await res.json();

  const ids = posts.map(post => post.id);
  const paths =  ids.map(id => ({ params:  {id : id.toString()} }));
  return {
    paths,
    fallback: false,
  };
};
