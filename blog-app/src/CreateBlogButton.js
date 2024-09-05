import React from "react";

const CreateBlogButton = () => {
  const handleCreateBlog = () => {
    // Implement create blog functionality here
    alert("Create Blog button clicked!");
  };

  return (
    <button className="create-blog-button" onClick={handleCreateBlog}>
      Create Blog
    </button>
  );
};

export default CreateBlogButton;
