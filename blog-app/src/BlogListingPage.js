import React, { useState } from "react";
import { Link } from "react-router-dom";
import CategoryList from "./CategoryList";
import BlogCard from "./BlogCard";
import blogs from "./bloglistindata";

const BlogListingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // Logic for displaying blogs based on selected category
  let currentBlogs;
  if (selectedCategory === "All") {
    currentBlogs = blogs;
  } else if (selectedCategory === "Travel") {
    currentBlogs = blogs.slice(0, 2);
  } else if (selectedCategory === "Health and Wellness") {
    currentBlogs = blogs.slice(2, 4);
  } else if (selectedCategory === "Technology") {
    currentBlogs = blogs.slice(4, 6);
  } else if (selectedCategory === "Lifestyle") {
    currentBlogs = blogs.slice(2, 4);
  } else if (selectedCategory === "Food and Recipes") {
    currentBlogs = blogs.slice(0, 2);
  } else if (selectedCategory === "Finance") {
    currentBlogs = blogs.slice(2, 4);
  }

  return (
    <div className="blog-listing-page">
      <div className="top-section">
        <CategoryList onSelectCategory={handleCategorySelect} />
        <Link to="/createblog" className="create-blog-button">
          Create Blog
        </Link>{" "}
      </div>
      <div className="blogs-container">
        {currentBlogs.map((blog) => (
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

export default BlogListingPage;
