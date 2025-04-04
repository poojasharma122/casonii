import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import GamingGetaways from "./Pages/GamingGetaways/GamingGetaways";
import LuxuryRetreats from "./Pages/LuxuryRetreats/LuxuryRetreats";
import RelaxingBreaks from "./Pages/RelaxingBreaks/RelaxingBreaks";
import AffordableStays from "./Pages/AffordableStays/AffordableStays";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./Pages/TermsAndConditions/TermsAndConditions";
import PersonalDataPolicy from "./Pages/PersonalDataPolicy/PersonalDataPolicy";
import ReturnsPolicy from "./Pages/ReturnsPolicy/ReturnsPolicy";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gaming-getaways" element={<GamingGetaways />} />
        <Route path="/luxury-retreats" element={<LuxuryRetreats />} />
        <Route path="/relaxing-breaks" element={<RelaxingBreaks />} />
        <Route path="/affordable-stays" element={<AffordableStays />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/personal-data-policy" element={<PersonalDataPolicy />} />
        <Route path="/returns-policy" element={<ReturnsPolicy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
