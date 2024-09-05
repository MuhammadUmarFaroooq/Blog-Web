import React, { useState } from "react";
import axios from "axios";
import "./CreatePost.css"; // Import CSS file
import { Link, useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [post, setPost] = useState({
    title: "",
    description: "",
    image_url: "",
  });
  const navigate = useNavigate();
  const savePost = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      const response = await axios.post("http://localhost:8000/create", post, {
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        alert("Post saved successfully!");
        // Optionally, clear the form after successful submission
        navigate("/blogs");
        setPost({
          title: "",
          description: "",
          image_url: "",
        });
      } else {
        console.error("Failed to save post:", response.data);

        alert("Post saved successfully!");
        navigate("/blogs");
      }
    } catch (error) {
      console.error("Error while saving post:", error);
      alert("An error occurred while saving the post. Please try again.");
      navigate("/blogs");
      alert("Post saved successfully!");
    }
  };

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Image URL"
        name="image_url"
        value={post.image_url}
        onChange={handleChange}
      />
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={post.title}
        onChange={handleChange}
        className="input-text"
      />
      <textarea
        name="description"
        placeholder="Tell your story..."
        value={post.description}
        onChange={handleChange}
        className="textarea"
      />
      <button onClick={savePost} className="create-blog-button">
        Publish
      </button>
    </div>
  );
};

export default CreatePost;
