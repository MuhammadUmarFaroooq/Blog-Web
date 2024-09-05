import React, { useState } from "react";

const CategoryList = ({ onSelectCategory }) => {
  const categories = [
    "All",
    "Travel",
    "Health and Wellness",
    "Technology",
    "Lifestyle",
    "Food and Recipes",
    "Finance",
  ]; // Sample categories
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <div className="category-list">
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => handleCategorySelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
