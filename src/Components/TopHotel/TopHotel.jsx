import React, { useState } from "react";
import "./TopHotel.css";
import { Link } from "react-router-dom";

const TopHotel = ({ hotel, index }) => {
  const [isExpanded, setIsExpanded] = useState(false); // State to manage description toggle
  const isEven = index % 2 === 0; // Even/odd layout control

  const toggleDescription = () => {
    setIsExpanded(!isExpanded); // Toggle description visibility
  };

  return (
    <section className={`tophotel ${isEven ? "even" : "odd"}`}>
      <div className="container">
        <div className="tophotel_wrapper">
          <div className={`tophotel_inner ${isEven ? "even" : "odd"}`}>
            <div className="tophotel_right">
              <div className="tophotel_content">
                <h4>
                  <Link to={hotel.url} target="_blank">
                    {hotel.name}
                  </Link>
                </h4>
                <div className="tohotel_review">
                  <p>{hotel.review}</p>
                </div>
                <div className="tohotel_price">
                  <p>
                    Price Per Night: <strong>${hotel.price}</strong>
                  </p>
                </div>
                <ul>
                  {hotel.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                <p className={`tophotel_description ${isExpanded ? "expanded" : ""}`}>
                  {hotel.description}
                </p>

                <div className="tophotel_btns">
                  <button onClick={toggleDescription} className="btn">
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                  {/* <button className="btn">View hotel</button> */}
                </div>
              </div>
            </div>
            <div className="tophotel_left">
              <div className="tophotel_imgWrap">
                <div
                  className="tophotel_img"
                  style={{ backgroundImage: `url(${hotel.image})` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopHotel;
