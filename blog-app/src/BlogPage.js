import React from "react";
import Navbar from "./Navbar"; // Import the Navbar component

const BlogPage = () => {
  return (
    <div className="blog-page">
      <Navbar /> {/* Include the Navbar component */}
      <div className="content">
        <h1 className="main-heading">Blogs</h1>
        <p className="sub-heading">All new Blogs in one Place</p>
        {/* Add your blog content here */}
      </div>
    </div>
  );
};

export default BlogPage;
