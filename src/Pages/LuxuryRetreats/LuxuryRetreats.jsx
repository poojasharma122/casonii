import React, { useEffect } from "react";
import "./LuxuryRetreats.css";
import Banner from "../../Components/Banner/Banner";
import LuxuryRetreatsBannerImg from "../../assets/Images/home-banner.jpg";
import TopHotel from "../../Components/TopHotel/TopHotel";
import TopHotelImg1 from "../../assets/Images/home-banner.jpg";
import Newsletter from "../../Components/Newsletter/Newsletter";
import NewsletterbackgroundImage from "../../assets/Images/home-banner.jpg";
import whyUseImg1 from "../../assets/Images/whyicon5.png";
import WhySec from "../../Components/WhySec/WhySec";

// banner data
const BannerData = {
  heading: "Luxury Retreats",
  title: "Top 5-Star Hotels and Luxury Resorts in Las Vegas",
  desc: "Las Vegas isn't just about bright lights and casinos — it's also home to some of the finest luxury hotels and 5-star resorts in the world. These properties are known for their outstanding service, premium amenities, and elevated experiences. Our handpicked list features the best Las Vegas luxury hotels that deliver comfort, privacy, and high-end living with every stay.",
  backgroundImage: LuxuryRetreatsBannerImg,
};
//hotel Data
const hotelData = [
  // sec1
  {
    name: "Waldorf Astoria Las Vegas",
    price: 409,
    review: "★★★★★",
    features: [
      "No on-site casino, focus on tranquility",
      "Award-winning spa and wellness centre",
      "Modern, quiet rooms with Strip views",
    ],
    description:
      "Waldorf Astoria Las Vegas offers understated luxury with a focus on calm and privacy. It stands out for its refined service and smoke-free, casino-free environment. Perfect for those who want five-star comfort without the typical Vegas buzz.",
    image: TopHotelImg1,
    url: "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=-1&hl=en-us&city=17072",
  },
  // sec2
  {
    name: "The Venetian Resort",
    price: 269,
    review: "★★★★★",
    features: [
      "All-suite accommodations",
      "Dozens of fine dining options",
      "Indoor canals and luxury shopping",
    ],
    description:
      "The Venetian is one of the most iconic 5-star resorts in Las Vegas, blending immersive design with upscale convenience. Suites are spacious and elegant, and the resort is packed with restaurants, retail, and entertainment — all within a refined atmosphere.",
    image: TopHotelImg1,
    url: "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=-1&hl=en-us&city=17072",
  },
  // sec3
  {
    name: "Four Seasons Hotel Las Vegas",
    price: 379,
    review: "★★★★★",
    features: [
      "Boutique hotel within Mandalay Bay",
      "Private entrance and exclusive pool",
      "Renowned Four Seasons service",
    ],
    description:
      "For travellers who value peace and premium hospitality, Four Seasons Las Vegas offers a quieter corner of the Strip. With its private lobby, elevated service, and lack of a casino, it caters to guests seeking privacy and classic luxury.",
    image: TopHotelImg1,
    url: "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=-1&hl=en-us&city=17072",
  },

  // sec4
  {
    name: "ARIA Sky Suites",
    price: 499,
    review: "★★★★★",
    features: [
      "Private entrance and luxury lounges",
      "Personalized concierge service",
      "Panoramic city views",
    ],
    description:
      "ARIA Sky Suites are a step above standard luxury, offering a truly elite experience. Guests enjoy priority access across the resort, including spa treatments, fine dining, and exclusive lounges. The suites themselves are spacious, sleek, and loaded with smart features.",
    image: TopHotelImg1,
    url: "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=-1&hl=en-us&city=17072",
  },
  // sec5
  {
    name: "The Cosmopolitan of Las Vegas ",
    price: 289,
    review: "★★★★★",
    features: [
      "Private terraces with Strip views",
      "High-end dining and nightlife",
      "Upscale yet lively atmosphere",
    ],
    description:
      "The Cosmopolitan blends style and energy, offering a five-star experience with a social twist. It’s known for its terrace views, award-winning restaurants, and modern design — ideal for those who want luxury without losing the excitement of Vegas.",
    image: TopHotelImg1,
    url: "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=-1&hl=en-us&city=17072",
  },
  // sec6
  {
    name: "Encore at Wynn Las Vegas",
    price: 329,
    review: "★★★★★",
    features: [
      "Encore at Wynn Las Vegas",
      "Award-winning restaurants and spa",
      "High-end casino and pool area",
    ],
    description:
      "Encore delivers a polished five-star experience with attention to detail in every space. Rooms are large and plush, the spa is one of the best in the city, and the atmosphere is sophisticated. Great for couples and business travellers alike.",
    image: TopHotelImg1,
    url: "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=-1&hl=en-us&city=17072",
  },
  // sec7
  {
    name: "Nobu Hotel at Caesars Palace",
    price: 359,
    review: "★★★★★",
    features: [
      "Boutique hotel within a larger resort",
      "Japanese-inspired design and amenities",
      "Exclusive Nobu restaurant and VIP check-in",
    ],
    description:
      "Nobu Hotel is tucked inside Caesars Palace but offers a completely different experience. Its intimate setting, elegant aesthetics, and personalized service make it feel like a private retreat in the middle of the Strip.",
    image: TopHotelImg1,
    url: "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=-1&hl=en-us&city=17072",
  },
  // sec8
  {
    name: "Delano Las Vegas ",
    price: 219,
    review: "★★★★★",
    features: [
      "l-suite, non-smoking environment",
      "Connected to Mandalay Bay",
      "Clean, modern design with desert tones",
    ],
    description:
      "Delano brings a fresh, stylish feel to the Strip with a strong focus on design and space. It’s ideal for guests who want luxury in a low-key setting, just steps away from the energy of the casino at Mandalay Bay.",
    image: TopHotelImg1,
    url: "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=-1&hl=en-us&city=17072",
  },
];

const sections = [
  {
    imgSrc: whyUseImg1,
    imgAlt: "why img",
    title: "Why Book a Luxury Hotel with Casonii?",
    description:
      "Luxury in Las Vegas is about more than just thread count. We feature hotels that deliver real value through exceptional service, thoughtful design, and memorable guest experiences. Every property listed has been reviewed for quality, consistency, and the kind of comfort that turns a trip into something unforgettable.",
  },
];

const LuxuryRetreatsNewsletterContent = {
  title: "Newsletter Signup",
  description:
    " Looking for wellness-focused hotel deals and spa getaway ideas?",
  // subdescription:
  // " Join our list for curated offers, insider tips, and resort features.",
  backgroundImage: NewsletterbackgroundImage,
};

const LuxuryRetreats = () => {
 useEffect(() => {
    document.title = "casoni";
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
        title={LuxuryRetreatsNewsletterContent.title}
        description={LuxuryRetreatsNewsletterContent.description}
        backgroundImage={LuxuryRetreatsNewsletterContent.backgroundImage}
      />
    </div>
  );
};

export default LuxuryRetreats;
