import React, { useEffect } from "react";
import Banner from "./../../Components/Banner/Banner";
import Categories from "../../Components/Categories/Categories";
import Featureds from "../../Components/Featureds/Featureds";
import PlanningTrip from "../../Components/PlanningTrip/PlanningTrip";
import NeedHelp from "../../Components/NeedHelp/NeedHelp";
import Newsletter from "../../Components/Newsletter/Newsletter";
import HomeBannerImg from "../../assets/Images/home-banner.jpg";
import NewsletterbackgroundImage from "../../assets/Images/home-banner.jpg";
import whyUseImg1 from "../../assets/Images/whyicon1.png";
import whyUseImg2 from "../../assets/Images/whyicon2.png";
import whyUseImg3 from "../../assets/Images/whyicon3.png";
import whyUseImg4 from "../../assets/Images/whyicon4.png";
import WhySec from "../../Components/WhySec/WhySec";

const BannerData = {
  title: "Discover the Best Las Vegas Hotels and Resorts",
  desc: "Find your perfect stay with Casonii. We showcase top-tier Las Vegas hotels and resorts tailored to every kind of traveller — from casino lovers and luxury seekers to spa enthusiasts and budget-conscious explorers. Every listing is curated with care, focusing on real guest experiences, high-quality stays, and up-to-date details that matter.",
  backgroundImage: HomeBannerImg,
};

const sections = [
  {
    imgSrc: whyUseImg1,
    imgAlt: "why img",
    title: "Curated Listings Only",
    description:
      " We focus on hotels that deliver real value and dependable experiences.",
  },
  {
    imgSrc: whyUseImg2,
    imgAlt: "why img",
    title: "Clear Categories",
    description:
      "Easily find what you're looking for, from casino resorts to peaceful spa retreats.",
  },
  {
    imgSrc: whyUseImg3,
    imgAlt: "why img",
    title: "Trusted Recommendations",
    description:
      "Every listing is selected based on quality, consistency, and guest feedback.",
  },
  {
    imgSrc: whyUseImg4,
    imgAlt: "why img",
    title: "Tailored for Travellers",
    description:
      " Whether you're planning a quick getaway or a week-long stay, we help you find the right fit.",
  },
];

const homeNewsletterContent = {
  title: "Subscribe for the Best Travel Deals",
  description:
    "Get the latest offers, travel guides, and updates from top hotels delivered straight to your inbox.",
  backgroundImage: NewsletterbackgroundImage,
};

const Home = () => {

  useEffect(() => {
    document.title = "casoni";
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <Banner
        title={BannerData.title}
        desc={BannerData.desc}
        backgroundImage={BannerData.backgroundImage}
      />
      <Categories />
      <Featureds />
      <div>
        <h2 className="page-heading">Why Use Casonii?</h2>
        <WhySec sections={sections} />
      </div>
      <PlanningTrip />
      <NeedHelp />
      <Newsletter
        title={homeNewsletterContent.title}
        description={homeNewsletterContent.description}
        backgroundImage={homeNewsletterContent.backgroundImage}
      />
    </div>
  );
};

export default Home;
