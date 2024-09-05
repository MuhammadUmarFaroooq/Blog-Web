// Footer.js
import React from "react";
import "./Footer.css"; // Import the CSS file for styling

const Footer = ({ id }) => {
  return (
    <footer className="footer" id={id}>
      <div className="footer-container">
        <div className="footer-left">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
            commodo erat, sit amet varius justo. Donec pretium turpis sed velit
            ultricies, at pulvinar odio tempus.
          </p>
        </div>
        <div className="footer-right">
          <h3>Contact Info</h3>
          <p>Email: talha@blog.com</p>
          <p>Phone: +92 305 8005252</p>
          <p>Address: Gujranwala, Punjab, Pakistan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
