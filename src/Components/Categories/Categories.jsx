import React from "react";
import "./Categories.css";
import CategoriesImg1 from "../../assets/Images/categories1.jpg";
import CategoriesImg2 from "../../assets/Images/categories2.jpg";
import CategoriesImg3 from "../../assets/Images/categories3.jpg";
import CategoriesImg4 from "../../assets/Images/categories4.jpg";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <section className="categories mb-10">
      <div className="container">
        <div className="categories_wrapper">
          <div className="categories_topbar">
            <h2 className="page-heading">Hotel Categories</h2>
          </div>
        </div>
      </div>
      <div className="categories-inner">
        <div className="categories_sec">
          <div
            className="categories_img"
            style={{ backgroundImage: `url(${CategoriesImg1})` }}
          />
          <div className="categories_content">
            <h4>Gaming Getaways</h4>
            <p>
              Explore premier Las Vegas casino hotels and resorts. From iconic
              gaming floors to on-site entertainment, our handpicked stays keep
              the action close at hand.
            </p>
            <Link to="/" className="btn">
              View detail
            </Link>
          </div>
        </div>
        <div className="categories_sec">
          <div
            className="categories_img"
            style={{ backgroundImage: `url(${CategoriesImg2})` }}
          />
          <div className="categories_content">
            <h4>Luxury Retreats</h4>
            <p>
              Step into the finest luxury hotels and 5-star resorts in Las
              Vegas. Designed for travellers seeking top service, premium
              comfort, and high-end amenities.
            </p>
            <Link to="/" className="btn">
              View detail
            </Link>
          </div>
        </div>
        <div className="categories_sec">
          <div
            className="categories_img"
            style={{ backgroundImage: `url(${CategoriesImg3})` }}
          />
          <div className="categories_content">
            <h4>Relaxing Breaks</h4>
            <p>
              Unwind at spa hotels, wellness resorts, and serene Las Vegas
              stays. Discover properties focused on rest, relaxation, and
              full-body renewal.
            </p>
            <Link to="/" className="btn">
              View detail
            </Link>
          </div>
        </div>
        <div className="categories_sec">
          <div
            className="categories_img"
            style={{ backgroundImage: `url(${CategoriesImg4})` }}
          />
          <div className="categories_content">
            <h4>Affordable Stays</h4>
            <p>
              Browse budget hotels, cheap resorts, and affordable Las Vegas
              stays that don’t cut corners on comfort or convenience.
            </p>
            <Link to="/" className="btn">
              View detail
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
