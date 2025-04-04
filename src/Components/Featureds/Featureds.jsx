import React from "react";
import "./Featureds.css";
import FeaturedsImg1 from "../../assets/Images/featured1.jpg";
import FeaturedsImg2 from "../../assets/Images/featured2.jpg";
import FeaturedsImg3 from "../../assets/Images/featured3.jpg";
import FeaturedsImg4 from "../../assets/Images/featured4.jpg";

const Featureds = () => {
  return (
    <section className="featured mb-10">
      <div className="container">
        <div className="featured_wrapper">
          <div className="tobarSec">
            <h2 className="page-heading">Featured Las Vegas Hotels</h2>
          </div>
          <div className="featured-inner">
            <div className="featured_sec">
              <div className="featured_img" style={{backgroundImage:`url(${FeaturedsImg1})`}} />
              <div className="featured_content">
                <h4>Bellagio Hotel &amp; Casino</h4>
                <div className="featured_contentInner">
                  <p>
                    Price Per Night: <strong>$289</strong>
                  </p>
                  <div className="rating">
                    <p>★★★★★</p>
                  </div>
                </div>
                <ul>
                  <li>Famous casino floor and fountains</li>
                  <li>Elegant rooms with Strip views</li>
                  <li>Centrally located on Las Vegas Boulevard</li>
                </ul>
                <p>
                  Bellagio offers one of the most recognizable luxury casino
                  experiences in Las Vegas. Its gaming floor is iconic, the art
                  collection is museum-worthy, and the fountain show never gets
                  old. Perfect for travellers who want the classic Vegas casino
                  vibe in upscale surroundings.
                </p>
              </div>
            </div>
            <div className="featured_sec">
              <div
                className="featured_img"
                style={{backgroundImage:`url(${FeaturedsImg2})`}}
              />
              <div className="featured_content">
                <h4>Waldorf Astoria Las Vegas</h4>
                <div className="featured_contentInner">
                  <p>
                    Price Per Night: <strong>$409</strong>
                  </p>
                  <div className="rating">
                    <p>★★★★★</p>
                  </div>
                </div>
                <ul>
                  <li>No on-site casino, pure luxury focus</li>
                  <li>Award-winning spa and wellness program</li>
                  <li>Floor-to-ceiling views of the Strip</li>
                </ul>
                <p>
                  Located right in the heart of the Strip, the Waldorf Astoria
                  is all about refined service and high-end design. Rooms are
                  sleek and quiet, the pool deck is serene, and the spa is a
                  destination in itself. Ideal for travellers who value peace
                  and polish.
                </p>
              </div>
            </div>
            <div className="featured_sec">
              <div
                className="featured_img"
                style={{backgroundImage:`url(${FeaturedsImg3})`}}
              />
              <div className="featured_content">
                <h4>Vdara Hotel &amp; Spa </h4>
                <div className="featured_contentInner">
                  <p>
                    Price Per Night: <strong> $199</strong>
                  </p>
                  <div className="rating">
                    <p>★★★★</p>
                  </div>
                </div>
                <ul>
                  <li>Full-service spa and wellness centre</li>
                  <li>Smoke-free, casino-free environment</li>
                  <li>Modern suites with kitchenettes</li>
                </ul>
                <p>
                  Vdara brings a calm energy to the Strip. With its soothing
                  design, deep-tissue treatments, and healthy dining options,
                  it's a great choice for wellness-focused visitors. It’s also
                  pet-friendly, which is a bonus for those travelling with
                  four-legged companions.
                </p>
              </div>
            </div>
            <div className="featured_sec">
              <div
                className="featured_img"
                style={{backgroundImage:`url(${FeaturedsImg4})`}}
              />
              <div className="featured_content">
                <h4>The STRAT Hotel, Casino &amp; Tower </h4>
                <div className="featured_contentInner">
                  <p>
                    Price Per Night: <strong> $59 </strong>
                  </p>
                  <div className="rating">
                    <p>★★★</p>
                  </div>
                </div>
                <ul>
                  <li>Affordable rates and spacious rooms</li>
                  <li>Observation deck with panoramic city views</li>
                  <li>On-site thrill rides and entertainment</li>
                </ul>
                <p>
                  A classic option for budget travellers, The STRAT is located
                  at the north end of the Strip and offers excellent value.
                  While the hotel is older than others, its tower attractions
                  and low rates make it a smart pick for families and
                  thrill-seekers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featureds;
