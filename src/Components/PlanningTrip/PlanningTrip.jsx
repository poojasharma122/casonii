import React from "react";
import "./planningTrip.css";
import PlanningTripImg from "../../assets/Images/planingTrip-img.jpg";

const PlanningTrip = () => {
  return (
    <section className="planningTrip mb-10">
      <div className="container">
        <div className="planningTrip-wrapper">
          <div className="tobarSec">
            <h2 className="page-heading">Planning Your Las Vegas Trip</h2>
          </div>
          <div className="planningTrip_inner">
            <div className="planningTrip_right">
              <div className="planningTrip_content">
                <p>
                  Las Vegas offers more than casinos. With world-class dining,
                  poolside relaxation, entertainment residencies, and desert
                  adventures just beyond the Strip, there's something here for
                  every kind of visitor. At Casonii, we help you plan the hotel
                  side of your trip — giving you a reliable place to start.
                </p>
              </div>
            </div>
            <div className="planningTrip_left">
              <div className="planningTrip_imgWrap">
                <div className="planningTrip_img" 
                style={{backgroundImage:`url(${PlanningTripImg})`}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanningTrip;
