// AboutBlog.js
import React from "react";

const AboutBlog = ({ id }) => {
  return (
    <div className="about-blog" id={id}>
      <div className="about-text">
        <h2>Why I Started Blog</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
          fringilla velit. Suspendisse in semper nunc. Vivamus vehicula erat in
          odio consequat, at condimentum odio vehicula. Nunc nec ipsum nec
          ligula pulvinar pulvinar a non ex. Vivamus nec nisi at arcu dignissim
          feugiat. Integer aliquet tempus libero, non viverra odio tristique
          nec.
        </p>
      </div>
      <div className="about-image">
        <img
          src="https://images.pexels.com/photos/1262304/pexels-photo-1262304.jpeg?auto=compress&cs=tinysrgb&w=600" // Sample image URL
          alt="About Blog"
        />
      </div>
    </div>
  );
};

export default AboutBlog;
