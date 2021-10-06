import Link from "next/link";
// // import Header from "../components/Header";
import Layout from "../components/MyLayout";
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

// 동적 라우팅
// import Layout from "../components/MyLayout.js";
// import Link from "next/link";

// const PostLink = (props) => (
//   <li>
//     {/*동적 페이지 <Link href={`/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link> */}
//     <Link href="/p/[id]" as={`/p/${props.id}`}>
//       <a>{props.id}</a>
//     </Link>
//   </li>
// );

// export default function Blog() {
//   return (
//     <Layout>
//       <h1>My Blog</h1>
//       <ul>
//         <PostLink id="Hello Next.js" />
//         <PostLink id="Learn Next.js is awesome" />
//         <PostLink id="Deploy apps with Zeit" />
//       </ul>
//     </Layout>
//   );
// }

import fetch from "isomorphic-unfetch";

const Index = (props) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map((show) => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function () {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=The Walking Dead");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map((entry) => entry.show),
  };
};

export default Index;
