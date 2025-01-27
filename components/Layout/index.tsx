import React from "react";
import { Categories, Copyright, PostWidget } from "..";
import { FeaturedPosts } from "../../sections";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
        <div className="lg:col-span-8 col-span-1">{children}</div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
      <div className="container mx-auto bg-white rounded-lg p-0 lg:p-8 pb-12 mb-8 border border-tla-green-500">
        <FeaturedPosts />
      </div>
      <div className="container mx-auto bg-white rounded-lg p-0 lg:p-8 pb-12 mb-8 border border-tla-green-500">
        <Footer />
      </div>
      <Copyright />
    </div>
  );
};

export default Layout;
