import React from "react";

function About({ image, about }) {
  // Default image URL in case no image is provided
  const defaultImage = "https://via.placeholder.com/215";

  return (
    <aside>
      <img src={image || defaultImage} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
