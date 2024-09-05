import React from "react";
import BlogPage from "./BlogPage";
import PopularBlogs from "./PopularBlogs";
import AboutBlog from "./AboutBlog";
import SubscribeForm from "./SubscribeForm";
import Footer from "./Footer";

const HomeComponent = () => {
  return (
    <div>
      <BlogPage />
      <PopularBlogs id="features" />
      <AboutBlog id="about" />
      <SubscribeForm />
      <Footer id="contact" />
    </div>
  );
};

export default HomeComponent;
