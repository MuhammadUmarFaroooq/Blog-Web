import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToSection = (id) => {
    console.log("Scrolling to section:", id);
    const section = document.getElementById(id);
    if (section) {
      console.log("Section found:", section);
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("Section not found:", id);
    }
  };
  return (
    <nav className="navbar">
      <div className="left">
        <span className="logo">Blog</span>
      </div>
      <div className="center">
        <span className="nav-item" onClick={() => scrollToSection("features")}>
          Features
        </span>
        <span className="nav-item" onClick={() => scrollToSection("contact")}>
          Contact
        </span>
        <Link to="/blogs" className="nav-item">
          Blog
        </Link>{" "}
        {/* Link to BlogListingPage */}
        <span className="nav-item" onClick={() => scrollToSection("about")}>
          About
        </span>
      </div>
      <div className="right">
        <Link to="/Login" className="nav-item">
          Login
        </Link>
        <Link to="/SignUp" className="nav-item signup">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
