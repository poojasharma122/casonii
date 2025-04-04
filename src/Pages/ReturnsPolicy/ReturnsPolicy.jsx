import React, { useEffect } from "react";
import "./ReturnsPolicy.css";
import HomeBannerImg from "../../assets/Images/home-banner.jpg";
import Banner from "./../../Components/Banner/Banner";

const BannerData = {
  title: "Discover the Best Las Vegas Hotels and Resorts",
  desc: "Find your perfect stay with Casonii. We showcase top-tier Las Vegas hotels and resorts tailored to every kind of traveller...",
  backgroundImage: HomeBannerImg,
};
const ReturnsPolicy = () => {
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

      <section className="main-information pb-10 px-5">
        <div className="container">
          <div className="information-wrapper">
            <div className="information-inner">
              <p>
                At Casonii
                <a href="mailto:(www.casonii.com)"> www.casonii.com</a>, we are
                committed to protecting the personal data of our users. This
                Personal Data Policy explains what personal information we
                collect, how we use it, how it is stored, and what rights you
                have regarding your data.
              </p>
            </div>
            <div className="information-inner">
              <h3>1. What is Personal Data?</h3>
              <p>
                Personal data refers to any information that can be used to
                identify you directly or indirectly. This may include your name,
                email address, IP address, and other contact details.
              </p>
            </div>
            <div className="information-inner">
              <h3>2. Data We Collect</h3>
              <p>
                We may collect personal data through the following interactions:
              </p>
              <ul>
                <li>
                  <strong>Newsletter Signups: </strong>When you provide your
                  email address to receive updates.
                </li>
                <li>
                  <strong>Contact Forms: </strong>When you submit questions,
                  requests, or feedback through our site.
                </li>
                <li>
                  <strong>Usage Data: </strong>Collected automatically via
                  cookies or analytics tools, including IP address, browser
                  type, and user behavior.
                </li>
              </ul>
              <p>
                We do <strong>not</strong> collect sensitive personal
                information such as financial details, government identification
                numbers, or health data.
              </p>
            </div>
            <div className="information-inner">
              <h3>3. How We Use Your Data</h3>
              <p>We use your personal data to:</p>
              <ul>
                <li>
                  Respond to your inquiries submitted through the contact form
                </li>
                <li>
                  Send newsletters and hotel updates to users who have opted in
                </li>
                <li>Monitor website traffic and improve functionality</li>
                <li>Prevent spam, abuse, or fraudulent use of our website</li>
              </ul>
              <p>
                We do not use personal data for profiling or automated
                decision-making.
              </p>
            </div>
            <div className="information-inner">
              <h3>4. Lawful Basis for Processing</h3>
              <p>
                We process your personal data based on one or more of the
                following legal grounds:
              </p>
              <ul>
                <li>Your consent (e.g., newsletter subscription)</li>
                <li>
                  Legitimate interest (e.g., website security and analytics)
                </li>
                <li>Compliance with legal obligations</li>
              </ul>
              <p>
                You can withdraw your consent at any time by contacting us at{" "}
                <a href="mailto:(contact@casonii.com)"> contact@casonii.com</a>{" "}
                or unsubscribing from email communications.
              </p>
            </div>
            <div className="information-inner">
              <h3>5. Data Storage and Security</h3>
              <p>
                All personal data is stored on secure servers with access
                restricted to authorized personnel only. We use technical and
                organizational safeguards such as encryption, firewalls, and
                regular security audits to protect your data.
              </p>
            </div>
            <div className="information-inner">
              <h3>6. Data Sharing</h3>
              <p>
                We do not sell or rent your personal data to any third parties.
                Your data may be shared only with trusted service providers who
                help us operate our website (e.g., email services or hosting
                platforms). These providers are contractually obligated to keep
                your data secure and confidential.
              </p>
            </div>
            <div className="information-inner">
              <h3>7. International Data Transfers</h3>
              <p>
                If you are located outside of the country where our servers are
                hosted, your data may be transferred internationally. In all
                such cases, we ensure appropriate safeguards are in place in
                compliance with applicable data protection laws.
              </p>
            </div>
            <div className="information-inner">
              <h3>8. Your Rights</h3>
              <p>
                You may have the following rights under applicable data
                protection laws:
              </p>
              <ul>
                <li>Access to the personal data we hold about you</li>
                <li>Correction of inaccurate or outdated information</li>
                <li>Deletion of your personal data</li>
                <li>Restriction of processing or objection to processing</li>
                <li>Data portability (where applicable)</li>
                <li>
                  Right to lodge a complaint with a data protection authority
                </li>
              </ul>
              <p>
                To exercise any of these rights, please email
                contact@casonii.com.
              </p>
            </div>
            <div className="information-inner">
              <h3>9. Data Retention</h3>
              <p>
                We retain your personal data only for as long as necessary to
                fulfill the purposes outlined in this policy, unless a longer
                retention period is required by law.
              </p>
            </div>
            <div className="information-inner">
              <h3>10. Updates to This Policy</h3>
              <p>
                We may update this Personal Data Policy as needed to reflect
                changes in law or our practices. Any updates will be posted on
                this page with a new effective date.
              </p>
              <p className="information-inner--email">
                Email:{" "}
                <a href="mailto:contact@casonii.com">contact@casonii.com</a>
              </p>
            </div>
            <div className="information-inner">
              <h3>11. Contact Us</h3>
              <p>
                If you have any questions or concerns about your personal data
                or this policy, please contact us at:
              </p>
              <p className="information-inner--email">
                Email:{" "}
                <a href="mailto:contact@casonii.com">contact@casonii.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReturnsPolicy;
