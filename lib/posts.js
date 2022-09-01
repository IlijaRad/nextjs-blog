import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

export const getPost = async (slug) => {
  const source = await readFile(`content/${slug}.md`, "utf8");
  const { data, content } = matter(source);
  const html = marked(content);
  return {
    date: data.date,
    title: data.title,
    body: html,
  };
};

export async function getPosts() {
  const slugs = await getSlugs();
  const posts = [];
  for (const slug of slugs) {
    const post = await getPost(slug);
    posts.push({ slug, ...post });
  }
  return posts;
}

export async function getSlugs() {
  const suffix = ".md";
  const files = await readdir("content");
  return files
    .filter((file) => file.endsWith(suffix))
    .map((file) => file.slice(0, -suffix.length));
}
