import Head from "next/head";
import { PostCard, Categories, PostWidget, Copyright } from "../components";
import FeaturedPosts from "../sections/FeaturedPosts";
import { getPosts } from "../services";

export default function Home({ posts }) {
  return (
    <div className="mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
        <div className="lg:col-span-9 col-span-1">
          {posts.map((post, index) => (
            <PostCard post={post.node} key={post.title || index} />
          ))}
        </div>
        <div className="lg:col-span-3 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
      <FeaturedPosts />
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return { props: { posts } };
}
