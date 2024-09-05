import React from "react";
import BlogCard from "./BlogCard";

const BlogListing = ({ blogs, selectedCategory }) => {
  const filteredBlogs = selectedCategory
    ? blogs.filter((blog) => blog.category === selectedCategory)
    : blogs;

  return (
    <div className="blog-listing">
      {filteredBlogs.map((blog) => (
        <BlogCard
          key={blog.id}
          title={blog.title}
          image={blog.image}
          writer={blog.writer}
          time={blog.time}
        />
      ))}
    </div>
  );
};

export default BlogListing;
