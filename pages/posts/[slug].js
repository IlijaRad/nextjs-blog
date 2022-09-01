import Head from "next/head";
import { getPost, getSlugs } from "../../lib/posts";

export async function getStaticPaths() {
  const slugs = await getSlugs();
  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const post = await getPost(context.params.slug);
  return {
    props: {
      post,
    },
  };
}

const PostPage = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <main>
        <p>{post.date}</p>
        <h1>{post.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  );
};

export default PostPage;
