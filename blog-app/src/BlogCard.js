// BlogCard.js
import React from "react";

const BlogCard = ({ title, image, writer, time }) => {
  return (
    <div className="blog-card">
      <img src={image} alt={title} />
      <div className="blog-info">
        <h3>{title}</h3>
        <div className="blog-meta">
          <span className="writer">{writer}</span>
          <span className="time">{time}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
