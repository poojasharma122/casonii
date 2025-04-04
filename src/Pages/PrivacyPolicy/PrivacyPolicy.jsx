
import React, { useEffect } from "react";
import "./PrivacyPolicy.css";
import HomeBannerImg from "../../assets/Images/home-banner.jpg";
import Banner from "./../../Components/Banner/Banner";

const BannerData = {
  title: "Discover the Best Las Vegas Hotels and Resorts",
  desc: "Find your perfect stay with Casonii. We showcase top-tier Las Vegas hotels and resorts tailored to every kind of traveller...",
  backgroundImage: HomeBannerImg,
};

const PrivacyPolicy = () => {
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
                At Casonii{" "}
                <a href="mailto:(www.casonii.com)">(www.casonii.com)</a>, we
                respect your privacy and are committed to protecting your
                personal data. This Privacy Policy outlines how we collect, use,
                disclose, and protect your information when you visit our
                website or interact with our services.
              </p>
            </div>
            <div className="information-inner">
              <h3>1. Information We Collect</h3>
              <p>We may collect the following types of information:</p>
              <h4>a. Personal Information</h4>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>
                  Contact details provided via contact forms or newsletter
                  signups
                </li>
              </ul>
              <h4>b. Non-Personal Information</h4>
              <ul>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring website</li>
                <li>Pages viewed on our site</li>
                <li>Date and time of visits</li>
                <li>IP address (used for analytics and security)</li>
              </ul>
              <h4>c. Cookies and Tracking Technologies</h4>
              <p>
                We use cookies and similar technologies to improve user
                experience, analyze traffic, and understand usage patterns.
              </p>
            </div>
            <div className="information-inner">
              <h3>2. How We Use Your Information</h3>
              <p>We use the data we collect for the following purposes:</p>
              <ul>
                <li>
                  To respond to inquiries submitted through our contact form
                </li>
                <li>
                  To send newsletters or updates to users who have opted in
                </li>
                <li>To improve website content, layout, and functionality</li>
                <li>
                  To monitor and analyze website performance and usage trends
                </li>
                <li>To detect and prevent spam, fraud, and abuse</li>
              </ul>
              <p>
                We do not sell or rent your personal data to any third parties.
              </p>
            </div>
            <div className="information-inner">
              <h3>3. Data Sharing and Disclosure</h3>
              <p>We may share your information in the following cases:</p>
              <ul>
                <li>
                  <strong>Service Providers:</strong>
                  With trusted partners who help operate our website (e.g.,
                  hosting, email platforms). These parties are bound by
                  confidentiality agreements.
                </li>
                <li>
                  <strong>Legal Requirements:</strong>
                  If required by law or to comply with legal processes, such as
                  court orders or regulatory obligations.
                </li>
                <li>
                  <strong>Business Transfers:</strong>
                  If Casonii is acquired, merged, or involved in a
                  reorganization, user information may be transferred as part of
                  that transaction.
                </li>
              </ul>
            </div>
            <div className="information-inner">
              <h3>4. Data Storage and Security</h3>
              <p>
                We take reasonable steps to secure your personal data against
                unauthorized access, misuse, loss, or alteration. Data is stored
                on secure servers, and we use encryption and access control
                where applicable.
              </p>
              <p>
                However, no method of online transmission or storage is 100%
                secure. While we strive to protect your data, we cannot
                guarantee its absolute security.
              </p>
            </div>
            <div className="information-inner">
              <h3>5. Your Rights</h3>
              <p>
                Depending on your jurisdiction, you may have the following
                rights:
              </p>
              <ul>
                <li>Access to the personal data we hold about you</li>
                <li>Correction of inaccurate or outdated information</li>
                <li>
                  Deletion of your personal data (subject to legal requirements)
                </li>
                <li>Withdrawal of consent for marketing communications</li>
                <li>Lodging a complaint with a data protection authority</li>
              </ul>
              <p>
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:contact@casonii.com">contact@casonii.com.</a>
              </p>
            </div>
            <div className="information-inner">
              <h3>6. Third-Party Links</h3>
              <p>
                Our site may include links to external websites, such as
                third-party booking platforms. We are not responsible for the
                privacy practices or content of those sites. We encourage you to
                review their privacy policies separately.
              </p>
            </div>
            <div className="information-inner">
              <h3>7. Children's Privacy</h3>
              <p>
                Casonii does not knowingly collect or solicit personal data from
                individuals under the age of 16. If we learn that we have
                inadvertently collected information from a minor, we will delete
                it promptly.
              </p>
            </div>
            <div className="information-inner">
              <h3>8. Changes to This Privacy Policy</h3>
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in law, technology, or our practices. Updates will be
                posted on this page with a revised effective date. We encourage
                users to review this page periodically.
              </p>
            </div>
            <div className="information-inner">
              <h3>9. Contact Us</h3>
              <p>
                If you have any questions or concerns about this Privacy Policy
                or our handling of your data, please contact us at:
              </p>
              <p className="information-inner--email">
                Email:{" "}
                <a href="mailto:contact@casonii.com">contact@casonii.com</a>
              </p>
              <p>
                Website <a href="/"> www.casonii.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
