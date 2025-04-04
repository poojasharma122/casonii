import React from "react";
import "./WhySec.css";

const WhySec = ({ heading, showHeading = true, sections }) => {
  return (
    <section className="whyUse mb-10">
      <div className="container">
        <div className="tobarSec">
          {/* Conditionally render the heading */}
          {showHeading && <h2 className="page-heading">{heading}</h2>}
        </div>
        <div className="whyUse_inner">
          {sections.map((section, index) => (
            <div key={index} className="whyuse_sec">
              <div className="whyuse-img">
                <img src={section.imgSrc} alt={section.imgAlt} />
              </div>
              <div className="whyuse_content">
                <h4>{section.title}</h4>
                <p>{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySec;
