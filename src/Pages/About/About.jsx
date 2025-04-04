import React, { useEffect } from "react";
import "./About.css";
import Banner from "../../Components/Banner/Banner";
import aboutBannerImg from "../../assets/Images/home-banner.jpg";
import { Link } from "react-router-dom";
import OurfocusImg from "../../assets/Images/categories1.jpg";
import whyUseImg1 from "../../assets/Images/whyicon5.png";
import WhySec from "../../Components/WhySec/WhySec";

const BannerData = {
  heading: "About",
  desc: "At Casonii, we help travellers find the right hotel experience in Las Vegas — no fluff, no gimmicks, just trusted options that match your style, needs, and budget. From casino resorts and 5-star retreats to spa escapes and affordable hotels, our goal is to simplify your search and guide you toward a better stay.",
  backgroundImage: aboutBannerImg,
};

const sections = [
  {
    imgSrc: whyUseImg1,
    imgAlt: "why img",
    title: "Why Casonii?",
    description:
      "Las Vegas has thousands of rooms available every night, but not every hotel is the right fit. We’re here to make that decision easier. Our research and content are built on key traveler insights, verified details, and consistent updates. We're not a booking platform. We're your decision-making shortcut — the place you visit before clicking \"reserve.\" ",
  },
];

const About = () => {

  useEffect(() => {
    document.title = "About";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Banner
        title={BannerData.heading}
        desc={BannerData.desc}
        backgroundImage={BannerData.backgroundImage}
      />
      {/*  */}
      <section className="ourFocus  mb-10">
        <div className="container">
          <div className="ourFocus_wrapper">
            <div className="tobarSec">
              <h2 className="page-heading">Our Focus</h2>
            </div>
            <div className="ourFocus_inner">
              <div className="ourFocus_right">
                <div className="ourFocus_content">
                  <p>
                    Casonii was created with a clear vision: to offer a curated,
                    no-nonsense directory of Las Vegas hotels and resorts based
                    on real standards — comfort, value, and quality. We don’t
                    flood our pages with every hotel in town. Instead, we choose
                    properties that stand out in four distinct travel
                    categories:
                  </p>
                  <ul>
                    <li>
                      <strong>Gaming Getaways:</strong> Featuring Las Vegas
                      casino hotels and casino resorts where the action never
                      stops.
                    </li>
                    <li>
                      <strong>Luxury Retreats:</strong> Showcasing 5-star hotels
                      and high-end Las Vegas resorts for travellers seeking
                      premium service and elevated experiences.
                    </li>
                    <li>
                      <strong>Relaxing Breaks:</strong> Highlighting spa hotels
                      and wellness resorts that offer full relaxation and
                      recovery on and off the Strip.
                    </li>
                    <li>
                      <strong> Affordable Stays:</strong> Listing cheap hotels
                      and budget-friendly resorts that deliver comfort without
                      high costs.
                    </li>
                  </ul>
                  <p>
                    Every listing is chosen for what it actually delivers — not
                    for how it markets itself.
                  </p>
                </div>
              </div>
              <div className="ourFocus_left">
                <div className="ouFocus_img">
                  <img src={OurfocusImg} alt="focus img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}

      <div className="whySec-info">
        <WhySec sections={sections} />
      </div>
      {/*  */}
      <section className="whoHelp mb-10">
        <div className="container">
          <div className="whoHelp_wrapper">
            <div className="tobarSec">
              <h2 className="page-heading">Who We Help</h2>
            </div>
            <div className="whoHelp_inner">
              <div className="whoHelp_right">
                <div className="whoHelp_img">
                  <img src={OurfocusImg} alt="whoHelpImg" />
                </div>
              </div>
              <div className="whoHelp_left">
                <div className="whoHelp_content">
                  <p>Our listings are designed for:</p>
                  <ul>
                    <li>Solo travellers needing a clean, quiet space</li>
                    <li>Solo travellers needing a clean, quiet space</li>
                    <li>Solo travellers needing a clean, quiet space</li>
                    <li>
                      Wellness travellers searching for spa hotels and peaceful
                      accommodations
                    </li>
                    <li>
                      Wellness travellers searching for spa hotels and peaceful
                      accommodations
                    </li>
                  </ul>
                  <p>
                    Wellness travellers searching for spa hotels and peaceful
                    accommodations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Standards */}
      <section className="ourStandards mb-10">
        <div className="container">
          <div className="ourStandards_wrapper">
            <div className="tobarSec">
              <h2 className="page-heading">Our Standards</h2>
            </div>
            <div className="ourStandards_inner">
              <div className="ourStandards_right">
                <div className="ourStandards_content">
                  <p>Each hotel on Casonii is reviewed based on:</p>
                  <ul>
                    <li>Guest satisfaction and independent ratings</li>
                    <li>Price transparency and value for money</li>
                    <li>Price transparency and value for money</li>
                    <li>Reputation for consistent service</li>
                  </ul>
                  <p>
                    We keep things current and honest — no outdated listings, no
                    filler content, and no paid placement.
                  </p>
                </div>
              </div>
              <div className="ourStandards_left">
                <div className="ourStandards_img">
                  <img src={OurfocusImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}

      <section className="contactAnytime mb-10">
        <div className="container">
          <div className="contactAnytime_wrapper">
            <div className="contactAnytime_right">
              <div className="contactAnytime_content">
                <h4>Contact Us Anytime</h4>
                <p>
                  If you have a question about a listing, want to suggest a
                  property, or need help navigating the site, feel free to
                  contact us at{" "}
                  <Link to="mailto:contact@casonii.com">
                    contact@casonii.com
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="contactAnytime_left">
              <div className="contactAnytime_img">
                <img src={OurfocusImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
