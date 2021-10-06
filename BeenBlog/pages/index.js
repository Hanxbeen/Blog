// import Link from "next/link";
// // import Header from "../components/Header";
// import Layout from "../components/MyLayout";
// const Index = () => (
//   <div>
//     {/* <Link href="/about">
//       <a>About Page</a>
//     </Link> */}
//     {/* <Header /> */}
//     <Layout>
//       <p>Hello Next.js</p>
//     </Layout>
//   </div>
// );

// export default Index;
import Layout from "../components/MyLayout.js";
import Link from "next/link";

const PostLink = (props) => (
  <li>
    {/* <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link> */}
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="Hello Next.js" />
        <PostLink id="Learn Next.js is awesome" />
        <PostLink id="Deploy apps with Zeit" />
      </ul>
    </Layout>
  );
}
