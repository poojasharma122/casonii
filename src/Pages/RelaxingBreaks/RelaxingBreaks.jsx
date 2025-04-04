import React, { useEffect } from "react";
import "./RelaxingBreaks.css";
import Banner from "../../Components/Banner/Banner";
import RelaxingBreaksBannerImg from "../../assets/Images/RelaxingBreaksImg/Waldorf-Astoria-Las-Vegas.png";
import TopHotel from "../../Components/TopHotel/TopHotel";
import Newsletter from "../../Components/Newsletter/Newsletter";
import NewsletterbackgroundImage from "../../assets/Images/home-banner.jpg";
import whyUseImg1 from "../../assets/Images/whyicon5.png";
import WhySec from "../../Components/WhySec/WhySec";
import TopHotelImg1 from "../../assets/Images/RelaxingBreaksImg/vdara-hotel-spa.png";
import TopHotelImg2 from "../../assets/Images/RelaxingBreaksImg/Waldorf-Astoria-Las-Vegas.png";
import TopHotelImg3 from "../../assets/Images/RelaxingBreaksImg/Four-Seasons.png";
import TopHotelImg4 from "../../assets/Images/RelaxingBreaksImg/The-Venetian-Resort-spa.png";
import TopHotelImg5 from "../../assets/Images/RelaxingBreaksImg/Red-Rock-Casino.png";
import TopHotelImg6 from "../../assets/Images/RelaxingBreaksImg/Green-Valley.png";
import TopHotelImg7 from "../../assets/Images/RelaxingBreaksImg/Delano-Las-Vegas.png";
import TopHotelImg8 from "../../assets/Images/RelaxingBreaksImg/JW-Marriott.png";

// banner data
const BannerData = {
  heading: "Relaxing Breaks",
  title: "Top Spa Hotels and Wellness Resorts in Las Vegas",
  desc: "Las Vegas may be known for nightlife and gaming, but it also offers some of the best spa hotels, wellness resorts, and relaxation-focused stays in the U.S. Whether you're here to unwind after a long week or planning a full-body reset, these properties are perfect for those who prioritize calm, comfort, and care. Our selection includes modern spas, thermal retreats, and wellness-focused hotels designed to help you fully recharge.",
  backgroundImage: RelaxingBreaksBannerImg,
};

const hotelData = [
  // sec1
  {
    name: "Vdara Hotel & Spa",
    price: 199,
    review: "★★★★",
    features: [
      "Full-service spa and wellness centre",
      "Smoke-free, casino-free environment",
      "Modern suites with kitchenettes",
    ],
    description:
      "Vdara stands out for its peaceful atmosphere just steps from the Strip. With no on-site casino, the environment is noticeably quieter and more relaxed. The spa offers a full menu of massages, facials, and specialty treatments, making it a go-to for wellness travellers.",
    image: TopHotelImg1,
    url: "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=-1&hl=en-us&city=17072",
  },
  // sec2
  {
    name: "Waldorf Astoria Las Vegas ",
    price: 409,
    review: "★★★★★",
    features: [
      "Private spa and relaxation rooms",
      "Private spa and relaxation rooms",
      "Personalized wellness packages",
    ],
    description:
      "Waldorf Astoria blends high-end hospitality with tranquility. Its spa is a standout, offering steam rooms, herbal saunas, and therapy pools. Ideal for guests looking for elevated service in a setting designed for recovery and renewal.",
    image: TopHotelImg2,
    url: "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=-1&hl=en-us&city=17072",
  },
  // sec3
  {
    name: "Four Seasons Hotel Las Vegas",
    price: 379,
    review: "★★★★★",
    features: [
      "Luxury spa with calming treatments",
      "Non-gaming environment",
      "Quiet pool area and peaceful rooms",
    ],
    description:
      "Four Seasons offers a serene space on the south end of the Strip. With its own entrance and calm layout, it’s well-suited to those who want the comforts of Vegas without the crowds. The spa specializes in holistic and therapeutic treatments that match the brand’s global reputation.",
    image: TopHotelImg3,
    url: "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=-1&hl=en-us&city=17072",
  },
  // sec4
  {
    name: "The Venetian Resortvs",
    price: 269,
    review: "★★★★★",
    features: [
      "Canyon Ranch spa and fitness centre",
      "Extensive wellness programming",
      "Immersive hydrotherapy experiences",
    ],
    description:
      "Canyon Ranch inside The Venetian is one of the largest day spas in the country. Guests can access world-class hydrotherapy circuits, salt grottoes, and personalized wellness consultations — all without leaving the hotel. It's ideal for both casual and committed spa-goers.",
    image: TopHotelImg4,
    url: "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=-1&hl=en-us&city=17072",
  },
  // sec5
  {
    name: "Red Rock Casino Resort & Spa",
    price: 159,
    review: "★★★★",
    features: [
      "Off-Strip resort with luxury spa",
      "Desert-inspired treatments",
      "Peaceful mountain views",
    ],
    description:
      "Located near Red Rock Canyon, this resort combines the convenience of a full-service hotel with the benefits of being removed from the Strip. The spa offers signature desert stone massages and a range of wellness therapies in a setting that feels like a true escape.",
    image: TopHotelImg5,
    url: "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=-1&hl=en-us&city=17072",
  },
  // sec6
  {
    name: "Green Valley Ranch Resort Spa & Casino",
    price: 149,
    review: "★★★★",
    features: [
      "Full-service spa with outdoor spa garden",
      "More relaxed and residential feel",
      "Great for couples or solo escapes",
    ],
    description:
      "Just 15 minutes from the Strip, Green Valley Ranch provides a slower pace and a full spa menu that includes private cabanas, outdoor treatments, and quiet zones. It’s a popular option for locals and returning visitors looking for a gentler Vegas experience.",
    image: TopHotelImg6,
    url: "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=-1&hl=en-us&city=17072",
  },
  // sec7
  {
    name: "Delano Las Vegas",
    price: 219,
    review: "★★★★★",
    features: [
      "Connected to Mandalay Bay spa and amenities",
      "Connected to Mandalay Bay spa and amenities",
      "All-suite, non-smoking environment",
    ],
    description:
      "Delano provides guests with spacious suites and access to the Bathhouse Spa — a quiet, stylish wellness space with soaking tubs, saunas, and massage rooms. The hotel’s tone is soft and refreshing, perfect for guests in need of a genuine break.",
    image: TopHotelImg7,
    url: "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=-1&hl=en-us&city=17072",
  },
  // sec8
  {
    name: "JW Marriott Las Vegas Resort & Spa ",
    price: 189,
    review: "★★★★",
    features: [
      "Sprawling resort with beautiful grounds",
      "Aquae Sulis Spa with steam and sauna",
      "Located in Summerlin, away from the Strip",
    ],
    description:
      "This resort offers a more natural setting with wide-open space and lush landscaping. The on-site spa features a full-service experience with a focus on hydrotherapy and aromatherapy. Great for travellers who want comfort, quiet, and fewer crowds.",
    image: TopHotelImg8,
    url: "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=-1&hl=en-us&city=17072",
  },
];

const sections = [
  {
    imgSrc: whyUseImg1,
    imgAlt: "why img",
    title: "Why Book a Spa Hotel with Casonii?",
    description:
      " Our Relaxing Breaks are chosen to help travellers fully unwind. From premium spas to thoughtfully designed rooms, each hotel here focuses on recovery, relaxation, and self-care. Whether you’re travelling solo, with a partner, or on a wellness retreat, these properties offer everything you need to unplug and recharge.",
  },
];

const RelaxingBreaksNewsletterContent = {
  title: "Newsletter Signup",
  description:
    "Want curated offers on luxury hotels and 5-star resorts in Las Vegas?",
  // subdescription:
  // "Sign up to receive exclusive insights, deals, and featured listings.",
  backgroundImage: NewsletterbackgroundImage,
};

const RelaxingBreaks = () => {
  useEffect(() => {
    document.title = "Relaxing Breaks";
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
        title={RelaxingBreaksNewsletterContent.title}
        description={RelaxingBreaksNewsletterContent.description}
        backgroundImage={RelaxingBreaksNewsletterContent.backgroundImage}
      />
    </div>
  );
};

export default RelaxingBreaks;
