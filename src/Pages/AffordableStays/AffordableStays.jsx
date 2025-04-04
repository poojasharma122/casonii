import React, { useEffect } from "react";
import "./AffordableStays.css";
import Banner from "../../Components/Banner/Banner";
import AffordableStaysBannerImg from "../../assets/Images/home-banner.jpg";
import TopHotelImg1 from "../../assets/Images/home-banner.jpg";
import TopHotel from "../../Components/TopHotel/TopHotel";
import Newsletter from "../../Components/Newsletter/Newsletter";
import NewsletterbackgroundImage from "../../assets/Images/home-banner.jpg";
import whyUseImg1 from "../../assets/Images/whyicon5.png";
import WhySec from "../../Components/WhySec/WhySec";

// banner data
const BannerData = {
  heading: "Affordable Stays",
  title: "Best Budget Hotels and Cheap Resorts in Las Vegas",
  desc: "Finding a great place to stay in Las Vegas doesn’t have to cost a fortune. Our Affordable Stays feature the best budget hotels, cheap hotels, and affordable resorts in Las Vegas that balance comfort, convenience, and cost. These properties are ideal for travellers who want to save without missing out on a good night’s sleep or easy access to the Strip.",
  backgroundImage: AffordableStaysBannerImg,
};
const hotelData = [
  // sec1
  {
    name: "The STRAT Hotel, Casino & Tower",
    price: 59,
    review: "★★★",
    features: [
      "Budget-friendly rates",
      "Observation deck and thrill rides",
      "Easy access to downtown and Strip",
    ],
    description:
      "The STRAT delivers value with a classic Vegas feel. While rooms are simple, the property offers plenty of entertainment — including an observation deck and adrenaline rides atop the tower. Great for travellers who want affordability with a few extra perks.",
    image: TopHotelImg1,
    url: "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=-1&hl=en-us&city=17072",
  },
  // sec2
  {
    name: "Excalibur Hotel & Casino",
    price: 69,
    review: "★★★",
    features: [
      "Fun, themed atmospheres",
      "Large pool area",
      "Central Strip location",
    ],
    description:
      "Excalibur offers a playful experience with castle-style architecture and family-friendly vibes. Rooms are basic but clean, and the location puts guests within walking distance of major attractions. It’s a popular choice for groups and travellers on a budget.",
    image: TopHotelImg1,
    url: "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=-1&hl=en-us&city=17072",
  },
  // sec3
  {
    name: "Circus Circus Hotel, Casino & Theme Park",
    price: 54,
    review: "★★★",
    features: [
      "Indoor theme park and circus acts",
      "Family-friendly option",
      "Budget rooms with flexible space",
    ],
    description:
      "Circus Circus is one of the most affordable full-service resorts on the Strip. It’s particularly great for families, thanks to its indoor amusement park and daily circus performances. Rooms vary in size, giving flexibility for groups and longer stays.",
    image: TopHotelImg1,
    url: "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=-1&hl=en-us&city=17072",
  },
  // sec4
  {
    name: "Luxor Hotel & Casino",
    price: 89,
    review: "★★★★",
    features: [
      "Pyramid-themed architecture",
      "Multiple pools and casino floor",
      "Walkable location on south Strip",
    ],
    description:
      "Luxor’s iconic design stands out, and its price point often makes it one of the best-value hotels in the city. Rooms have been refreshed in recent years, and the variety of entertainment options within the resort makes it a smart pick for budget-conscious visitors.",
    image: TopHotelImg1,
    url: "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=-1&hl=en-us&city=17072",
  },

  // sec5
  {
    name: "OYO Hotel & Casino Las Vegas",
    price: 49,
    review: "★★★",
    features: [
      "Lowest nightly rates near the Strip",
      "Casino and sports bar on-site",
      "Casino and sports bar on-site",
    ],
    description:
      "OYO offers one of the cheapest stays near the Strip without sacrificing essentials. The vibe is casual, the check-in is fast, and there’s a sports bar and gaming floor on site. It’s ideal for short stays or quick getaways on a tight budget.",
    image: TopHotelImg1,
    url: "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=-1&hl=en-us&city=17072",
  },

  // sec6
  {
    name: "Tuscany Suites & Casino ",
    price: 74,
    review: "★★★",
    features: [
      "Spacious suites with kitchenettes",
      "Quiet setting just off the Strip",
      "Affordable without feeling basic",
    ],
    description:
      "Tuscany Suites provides a laid-back, affordable alternative just east of the Strip. Suites are large, the pool area is inviting, and there’s a casual casino on-site. Guests often mention the peace and space as a major plus.",
    image: TopHotelImg1,
    url: "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=-1&hl=en-us&city=17072",
  },
  // sec7
  {
    name: "Ellis Island Hotel, Casino & Brewery",
    price: 69,
    review: "★★★",
    features: [
      "On-site brewery and BBQ restaurant",
      "Friendly, local feel",
      "No-frills but consistently clean",
    ],
    description:
      "Ellis Island is a local favourite for its comfort food, in-house brewery, and low nightly rates. While the hotel itself is simple, it offers a laid-back atmosphere and personal service that stands out in the budget category.",
    image: TopHotelImg1,
    url: "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=-1&hl=en-us&city=17072",
  },
  // sec8
  {
    name: "Bally’s Las Vegas (now Horseshoe)",
    price: 99,
    review: "★★★★",
    features: [
      "Central Strip location",
      "Larger rooms than typical in price range",
      "Connected to Paris Las Vegas",
    ],
    description:
      "Now operating under the Horseshoe brand, this hotel offers solid value and bigger rooms than many nearby competitors. It’s directly on the Strip, with quick access to casinos, restaurants, and shows — all without breaking the bank.",
    image: TopHotelImg1,
    url: "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=-1&hl=en-us&city=17072",
  },
];

const sections = [
  {
    imgSrc: whyUseImg1,
    imgAlt: "why img",
    title: "Why Book a Budget Hotel with Casonii?",
    description:
      " Travelling on a budget shouldn't mean sacrificing comfort or convenience. Each of our Affordable Stays offers great value, dependable amenities, and easy access to Las Vegas highlights. From family trips to weekend escapes, we help you stay smart — and spend where it counts.",
  },
];

const AffordableStaysNewsletterContent = {
  title: "Newsletter Signup",
  description:
    " Want affordable Las Vegas hotel picks, flash deals, and last-minute booking tips?",
  // subdescription:
  // " Sign up for updates and savings straight to your inbox.",
  backgroundImage: NewsletterbackgroundImage,
};

const AffordableStays = () => {
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
      {hotelData.map((hotel, index) => (
        <TopHotel key={index} hotel={hotel} index={index} />
      ))}

      <div className="whySec-info">
        <WhySec sections={sections} />
      </div>
      <Newsletter
        title={AffordableStaysNewsletterContent.title}
        description={AffordableStaysNewsletterContent.description}
        backgroundImage={AffordableStaysNewsletterContent.backgroundImage}
      />
    </div>
  );
};

export default AffordableStays;
