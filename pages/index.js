import Head from "next/head";
import Link from "next/link";
import { getPosts } from "../lib/posts";

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: { posts },
  };
}

const HomePage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>My blog</title>
        <meta name="description" value="This is my blog" />
      </Head>
      <main>
        <h1>My Blog</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default HomePage;
