import React from "react";
import "./NeedHelp.css";
import NeedhelpImg from "../../assets/Images/needhelping-img.jpg";

const NeedHelp = () => {
  return (
    <div className="needHelp mb-10">
      <div className="container">
        <div className="needHelp_wrapper">
          <div className="needHelp_inner">
            <div className="needHelp_right">
              <div className="needHelp_imgWra">
                <div
                  className="needHelp_img"
                  style={{ backgroundImage: `url(${NeedhelpImg})` }}
                />
              </div>
            </div>
            <div className="needHelp_left">
              <div className="needHelp_content">
                <h4>Need Help?</h4>
                <p>
                  Reach out anytime at contact@casonii.com. We're happy to help
                  point you toward the right stay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedHelp;
