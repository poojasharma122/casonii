import React, { useEffect } from "react";
import "./GamingGetaways.css";
import Banner from "../../Components/Banner/Banner";
import TopHotel from "../../Components/TopHotel/TopHotel";
import TopHotelImg1 from "../../assets/Images/GamingGetawaysImg/Bellagio-Hotel.png";
import TopHotelImg2 from "../../assets/Images/GamingGetawaysImg/Caesars-Palace.png";
import TopHotelImg3 from "../../assets/Images/GamingGetawaysImg/aria-resort.png";
import TopHotelImg4 from "../../assets/Images/GamingGetawaysImg/The-Venetian-Resort.png";
import TopHotelImg5 from "../../assets/Images/GamingGetawaysImg/mgm-grand.png";
import TopHotelImg6 from "../../assets/Images/GamingGetawaysImg/STRAT-Hotel.png";
import TopHotelImg7 from "../../assets/Images/GamingGetawaysImg/Resorts-World.png";
import TopHotelImg8 from "../../assets/Images/GamingGetawaysImg/Planet-Hollywood.png";
import Newsletter from "../../Components/Newsletter/Newsletter";
import GamingGetawaysBannerImg from "../../assets/Images/GamingGetawaysImg/Resorts-World.png";
import NewsletterbackgroundImage from "../../assets/Images/home-banner.jpg";
import whyUseImg1 from "../../assets/Images/whyicon5.png";
import WhySec from "../../Components/WhySec/WhySec";

const BannerData = {
  heading: "Gaming Getaways",
  title: "Top Las Vegas Casino Hotels and Resorts",
  desc: "Looking to stay where the action never stops? Our Gaming Getaways feature the best casino hotels and casino resorts in Las Vegas. Whether you're here to play poker, spin the roulette wheel, or just soak in the electric energy of the Strip, these hotels combine full-scale entertainment with unforgettable stays. Each property is selected for its casino experience, location, and guest satisfaction.",
  backgroundImage: GamingGetawaysBannerImg,
};

// hoteldata content
const hotelData = [
  {
    name: "Bellagio Hotel & Casino ",
    price: 289,
    review: "★★★★★",
    features: [
      "World-famous casino floor",
      "Signature fountain shows",
      "Central Strip location",
    ],
    description:
      "Bellagio is a cornerstone of Las Vegas casino culture. The gaming area blends elegance with energy, offering poker, blackjack, slots, and high-stakes rooms. Beyond the tables, guests enjoy refined rooms, gourmet dining, and the iconic fountain shows out front. It’s a destination in itself.",
    image: TopHotelImg1,
    url: "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=-1&hl=en-us&city=17072",
  },
  {
    name: "Caesars Palace",
    price: 249,
    review: "★★★★★",
    features: [
      "Vast casino floor with sports book",
      "Roman-inspired design and décor",
      "Home to major headline entertainment",
    ],
    description:
      "Caesars Palace brings drama and scale to the Strip. The casino is expansive, with thousands of machines, table games, and a popular sports book. With its massive Forum Shops, celebrity chef restaurants, and live shows, there’s no shortage of things to do between hands.",
    image: TopHotelImg2,
    url: "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=-1&hl=en-us&city=17072",
  },
  {
    name: "ARIA Resort & Casino",
    price: 299,
    review: "★★★★★",
    features: [
      "Modern casino with high-limit rooms",
      "Fine dining and art installations",
      "Energy-efficient, tech-forward design",
    ],
    description:
      "ARIA delivers a sleek and modern take on the Las Vegas casino resort. The gaming floor includes everything from low-stakes play to elite private lounges. Guests enjoy intuitive room controls, upscale cuisine, and thoughtful design touches throughout the property.",
    image: TopHotelImg3,
    url: "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=-1&hl=en-us&city=17072",
  },
  // sec4
  {
    name: "The Venetian Resort",
    price: 269,
    review: "★★★★★",
    features: [
      "Elegant Italian-themed casino",
      "Massive gaming space and poker room",
      "Canal Shoppes and gondola rides on site",
    ],
    description:
      "The Venetian mixes immersive design with top-tier gaming. Its sprawling casino includes all the classics plus one of the city’s best poker rooms. Between plays, stroll the indoor canal or dine at one of dozens of restaurants, all without leaving the resort. ",
    image: TopHotelImg4,
    url: "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=-1&hl=en-us&city=17072",
  },
  // sec5
  {
    name: "MGM Grand",
    price: 189,
    review: "★★★★",
    features: [
      "High-energy casino and sports book",
      "Nightclubs, pool complex, and events",
      "Variety of room styles and towers",
    ],
    description:
      "MGM Grand is one of the largest hotels in the world, and its casino reflects that scale. The space is lively, the slot selection is deep, and the table games stay busy day and night. It’s ideal for travellers who want nonstop options and nightlife.",
    image: TopHotelImg5,
    url: "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=-1&hl=en-us&city=17072",
  },
  // sec6
  {
    name: "The STRAT Hotel, Casino & Tower",
    price: 59,
    review: "★★★★",
    features: [
      "Classic casino with affordable limits",
      "Observation deck with thrill rides",
      "Strong value for budget travellers",
    ],
    description:
      "The STRAT offers a more casual casino experience, with approachable table limits and a comfortable layout. While the resort is older, it delivers fun, affordability, and unique views from the top of its tower — ideal for travellers looking to stretch their budget.",
    image: TopHotelImg6,
    url: "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=-1&hl=en-us&city=17072",
  },
  // sec7
  {
    name: "Resorts World Las Vegas",
    price: 219,
    review: "★★★★★",
    features: [
      "Newest large-scale resort on the Strip",
      "Multiple casinos and gaming zones",
      "Multiple casinos and gaming zones",
    ],
    description:
      "Resorts World brings new energy to Las Vegas. It includes multiple hotel brands under one roof, along with a casino that blends modern tech with classic gaming. The vibe is fresh, with sleek design, cutting-edge tech, and a strong mix of global influences.",
    image: TopHotelImg7,
    url: "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=-1&hl=en-us&city=17072",
  },
  // sec8
  {
    name: "Planet Hollywood Resort & Casino",
    price: 129,
    review: "★★★★",
    features: [
      "Energetic casino with party vibe",
      "Central Strip location near shopping",
      "Music and film-themed rooms",
    ],
    description:
      "Planet Hollywood combines pop culture flair with nonstop gaming. The casino is upbeat and approachable, drawing a younger crowd. Located in the middle of the Strip, it offers easy access to shows, clubs, and the Miracle Mile shops.",
    image: TopHotelImg8,
    url: "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=-1&hl=en-us&city=17072",
  },
];

const sections = [
  {
    imgSrc: whyUseImg1,
    imgAlt: "why img",
    title: "Why Book a Casino Hotel with Casonii?",
    description:
      " We focus on casino resorts that offer more than just slots and table games. Each listing has been chosen for its full experience — from casino quality and dining options to atmosphere and value. Whether you're a first-time visitor or a frequent high-roller, you'll find a hotel here that fits your style of play.",
  },
];

const gamingGetawaysNewsletterContent = {
  title: "Stay Updated on Gaming Getaways",
  description:
    "Subscribe for exclusive deals and insider tips on the best casino resorts and gaming experiences.",
  backgroundImage: NewsletterbackgroundImage,
};

const GamingGetaways = () => {
  useEffect(() => {
    document.title = "Gaming Getaways";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Banner
        heading={BannerData.heading}
        title={BannerData.title}
        desc={BannerData.desc}
        backgroundImage={BannerData.backgroundImage}
      />
      {hotelData.map((hotel, index) => (
        <TopHotel key={index} hotel={hotel} index={index} />
      ))}

      <div className="whySec-info">
        <WhySec sections={sections} />
      </div>
      <Newsletter
        title={gamingGetawaysNewsletterContent.title}
        description={gamingGetawaysNewsletterContent.description}
        backgroundImage={gamingGetawaysNewsletterContent.backgroundImage}
      />
    </div>
  );
};

export default GamingGetaways;
