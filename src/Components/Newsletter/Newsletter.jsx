import React from "react";
import "./Newsletter.css";


const Newsletter = ({ title, description, backgroundImage }) => {
  return (
    <section
      className="newsletter mb-10"
      style={{ backgroundImage: `url(${backgroundImage || ""})` }}
    >
      <div className="container">
        <div className="newsletter_wrapper">
          <div className="newsletter_content">
            <h2 className="page-heading">{title || "Newsletter Signup"}</h2>
            <p>
              {description ||
                "Get hotel deals, travel tips, and updates sent straight to your inbox."}
            </p>
            <div className="newsletter_inner">
              <form className="newsletter_form">
                <input
                  type="email"
                  className="input_email"
                  placeholder="Enter Your Email"
                />
                <button className="btn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
