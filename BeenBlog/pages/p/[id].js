// 동적 라우팅
// import { useRouter } from "next/router";
// import Layout from "../../components/MyLayout";

// export default function Post() {
//   const router = useRouter();

//   return (
//     <Layout>
//       <h1>{router.query.id}</h1>
//       <p>This is the blog post content.</p>
//     </Layout>
//   );
// }
import Layout from "../../components/MyLayout";
import fetch from "isomorphic-unfetch";

const Post = (props) => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p>/g, "")}</p>
    <img src={props.show.image.medium} />
  </Layout>
);

Post.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);
  console.log(`${show.image.medium}`);

  return { show };
};

export default Post;
