// PopularBlogs.js or any other component
import React from "react";
import BlogCard from "./BlogCard"; // Import the BlogCard component
import blogs from "./blogData"; // Import the blog data array

const PopularBlogs = ({ id }) => {
  return (
    <div className="popular-blogs" id={id}>
      <h2>Popular Blogs</h2>
      <div className="blogs-container">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            image={blog.image}
            writer={blog.writer}
            time={blog.time}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularBlogs;
