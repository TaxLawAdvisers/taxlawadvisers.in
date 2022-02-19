import * as React from "react";
import { Categories, PostCard, PostWidget } from "../../components";
import {
  getPosts,
  getPostDetails,
  getCategories,
  getCategory,
} from "../../services";

const CategoryPage = ({ posts, category }) => {
  console.log(category);
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
        <div className="lg:col-span-8 col-span-1">
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post, index) => {
              console.log(post.node.categories);
              if (
                post.node.categories &&
                post.node.categories.indexOf(category[0])
              ) {
                return <PostCard post={post.node} key={post.title || index} />;
              } else {
                return "No Posts for this category";
              }
            })}
          </div>
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;

export async function getStaticProps({ params }) {
  const category = await getCategory(params.slug);
  const posts = (await getPosts()) || [];
  console.log(category);
  return { props: { category: category, posts: posts } };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}
