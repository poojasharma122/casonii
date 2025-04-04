import React, { useEffect } from "react";
import "./Contact.css";
import Banner from "./../../Components/Banner/Banner";
import ContactBannerImg from "../../assets/Images/home-banner.jpg";
import { Form } from "react-router-dom";
import  contactinfoImg from "../../assets/Images/categories2.jpg";

const BannerData = {
  heading: "Contact",
  desc: "Have questions about Las Vegas hotels, casino resorts, or budget-friendly stays? Our team at Casonii is here to help. Whether you're planning a luxury getaway, a wellness retreat, or looking for the best affordable hotel deals, we can guide you to the right place to start your booking journey.",
  backgroundImage: ContactBannerImg,
};
const Contact = () => {
   useEffect(() => {
      document.title = "casoni";
      window.scrollTo(0, 0);
    }, []);
    
  return (
    <div>
      <Banner
        title={BannerData.heading}
        desc={BannerData.desc}
        backgroundImage={BannerData.ContactBannerImg}
      />
      {/*  */}
      <section className="contactInfo mb-10">
        <div className="container">
          <div className="contactInfo_wrapper">
            <div className="contactInfo_right">
              <div className="contactInfo_content">
                <p>We specialize in curating listings for:</p>
                <ul>
                  <li>
                    <strong> Casino Hotels & Resorts</strong> (Gaming Getaways)
                  </li>
                  <li>
                    <strong>Luxury Hotels & 5-Star Resorts </strong>(Luxury
                    Retreats)
                  </li>
                  <li>
                    <strong>Spa Hotels & Wellness Resorts </strong>(Relaxing
                    Breaks)
                  </li>
                  <li>
                    <strong>Budget Hotels & Cheap Stays</strong> (Affordable
                    Stays)
                  </li>
                </ul>
                <p>
                  Each hotel featured on our site is chosen based on quality,
                  reliability, and real guest experiences. If you need
                  assistance navigating listings or want to learn more about a
                  specific hotel, feel free to reach out.
                </p>
                <div className="contactInfo_btm">
                  <p>
                    <strong>Contact Email</strong>
                  </p>
                  <p>For all inquiries, please email us at:</p>
                  <p>
                    <strong> 📧 contact@casonii.com</strong>
                  </p>
                  <p>
                    We typically respond within 24 hours, Monday through Friday.
                  </p>
                </div>
              </div>
            </div>
            <div className="contactInfo_left">
              <div className="contactInfo_img">
                <img src={contactinfoImg} alt="conatct images" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* needhelp */}
      <section className="contact mb-10">
        <div className="container">
          <div className="contact_wrapper">
            <div className="contact_right">
              <div className="contact_content">
                <h4>Need Help With:</h4>
                <ul>
                  <li>Finding the best Las Vegas resort for your trip</li>
                  <li>Comparing amenities across casino hotels</li>
                  <li>Comparing amenities across casino hotels</li>
                  <li>Locating cheap hotels near the Strip or downtown</li>
                  <li>General questions about Casonii listings</li>
                </ul>
              </div>
            </div>
            <div className="contact_left">
              <form className="contact_form">
              <h4>Contact Form</h4>
                <p>
                  Fill out the form below and we’ll get back to you shortly.
                </p>
                <div className="form-container">
                  <input type="text" placeholder="Full Name" />
                </div>
                <div className="form-container">
                  <input type="password" placeholder="Email Address" />
                </div>
                <div className="form-container">
                  <input type="text" placeholder="Subject" />
                </div>
                <textarea
                  name=""
                  id=""
                  rows="4"
                  cols="20"
                  placeholder="Your Message"
                ></textarea>
                <input type="submit" className="btn" value="Submit" />
                <div className="contact_btm">
                  <p>
                    We value your time and look forward to helping you find the
                    right Las Vegas hotel — no matter your budget or travel
                    style.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
