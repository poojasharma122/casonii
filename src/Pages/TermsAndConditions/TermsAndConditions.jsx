import React, { useEffect } from "react";
import "./TermsAndConditions.css";
import HomeBannerImg from "../../assets/Images/home-banner.jpg";
import Banner from "./../../Components/Banner/Banner";

const BannerData = {
  title: "Discover the Best Las Vegas Hotels and Resorts",
  desc: "Find your perfect stay with Casonii. We showcase top-tier Las Vegas hotels and resorts tailored to every kind of traveller...",
  backgroundImage: HomeBannerImg,
};

const TermsAndConditions = () => {
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
                These Terms and Conditions ("Terms") govern your access to and
                use of the website{" "}
                <a href="mailto:(www.casonii.com)"> www.casonii.com</a>{" "}
                ("Casonii", "we", "our", or "us"). By using our site, you agree
                to be bound by these Terms. If you do not agree with any part of
                these Terms, you must discontinue use of our services
                immediately.
              </p>
            </div>
            <div className="information-inner">
              <h3>1. About Casonii</h3>
              <p>
                Casonii is an independent hotel listings directory focused on
                Las Vegas accommodations. We provide curated content and
                recommendations across four main categories:
              </p>
              <ul>
                <li>Casino Hotels &amp; Resorts (Gaming Getaways)</li>
                <li>Luxury Hotels &amp; 5-Star Resorts (Luxury Retreats)</li>
                <li>Spa Hotels &amp; Wellness Resorts (Relaxing Breaks)</li>
                <li>Budget Hotels &amp; Affordable Stays (Affordable Stays)</li>
              </ul>
              <p>
                Please note: Casonii is not a booking engine or travel agency.
                We do not accept or process payments, reservations, or
                cancellations.
              </p>
            </div>
            <div className="information-inner">
              <h3>2. Use of the Website</h3>
              <p>
                By accessing and using Casonii, you agree to use the website
                solely for lawful purposes and in a way that does not infringe
                the rights of, restrict, or inhibit the use and enjoyment of
                this site by any third party.
              </p>
              <p>You must not:</p>
              <ul>
                <li>
                  Misuse the website by knowingly introducing viruses, malware,
                  or other harmful material
                </li>
                <li>
                  Attempt unauthorized access to the server or data connected to
                  Casonii
                </li>
                <li>
                  Reproduce, duplicate, copy, or re-sell any part of our website
                  without express written permission
                </li>
                <li>Pages viewed on our site</li>
              </ul>
            </div>
            <div className="information-inner">
              <h3>3. Accuracy of Information</h3>
              <p>
                We aim to ensure that all content on Casonii is accurate and up
                to date. However, hotel prices, availability, amenities, and
                policies are subject to change. We do not guarantee the
                completeness, reliability, or accuracy of third-party hotel
                data.
              </p>
              <p>
                Before making a booking via any external link or provider, users
                are strongly encouraged to verify all details directly with the
                hotel or booking service.
              </p>
            </div>
            <div className="information-inner">
              <h3>4. Third-Party Links</h3>
              <p>
                Casonii contains links to external booking platforms and hotel
                websites. These are provided for convenience only. We do not
                endorse or control these third-party services and are not
                responsible for any transactions, experiences, or damages
                resulting from their use.
              </p>
              <p>
                Any interaction with third-party platforms is subject to their
                own terms and conditions and privacy policies.
              </p>
            </div>
            <div className="information-inner">
              <h3>5. Intellectual Property</h3>
              <p>
                All original content on Casonii — including text, layout,
                graphics, and logo — is the property of Casonii and protected
                under applicable copyright and intellectual property laws. You
                may not copy, modify, distribute, or exploit any part of the
                site without prior written permission.
              </p>
            </div>
            <div className="information-inner">
              <h3>6. Limitation of Liability</h3>
              <p>
                To the fullest extent permitted by law, Casonii shall not be
                liable for any direct, indirect, incidental, consequential, or
                special damages arising out of or in any way connected with your
                use of or inability to use our website, including reliance on
                any information obtained through the site.
              </p>
              <p>
                We are not responsible for inaccuracies in third-party listings
                or for any losses incurred due to actions taken based on site
                content.
              </p>
            </div>
            <div className="information-inner">
              <h3>7. Indemnification</h3>
              <p>
                You agree to indemnify and hold harmless Casonii, its operators,
                affiliates, partners, and content providers from any claims,
                damages, losses, liabilities, and expenses arising from your use
                of the site or breach of these Terms.
              </p>
            </div>
            <div className="information-inner">
              <h3>8. Modifications to the Terms</h3>
              <p>
                We reserve the right to modify or update these Terms at any
                time. Updates will be posted on this page with a revised
                effective date. Your continued use of the website after changes
                are posted constitutes your acceptance of the new Terms.
              </p>
            </div>
            <div className="information-inner">
              <h3>9. Governing Law</h3>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of Canada, without regard to conflict of law
                provisions. Any disputes arising from or in connection with
                these Terms shall be subject to the exclusive jurisdiction of
                the courts in Canada.
              </p>
            </div>
            <div className="information-inner">
              <h3>10. Contact Us</h3>
              <p>
                For questions or concerns about these Terms and Conditions,
                please contact us at:
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

export default TermsAndConditions;
