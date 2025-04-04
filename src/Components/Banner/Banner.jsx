import React from "react";
import "./Banner.css";

const Banner = ({ heading, title, desc, backgroundImage }) => {
  return (
    <section
      className="banner mb-10"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div className="banner_wrapper">
          <div className="banner_content">
            {heading && <h1>{heading}</h1>}
            <h2>{title}</h2>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
