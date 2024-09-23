import { useState, useEffect, createContext } from "react";
import Swal from "sweetalert2";
import SNavbar from "./components/sNavbar";
import SHero from "./components/SHero";
import SBanner from "./components/SBanner";
import SWhyChoose from "./components/SWhyChoose";
import SAbout from "./components/SAbout";
import SFooter from "./components/SFooter";
import SPopup from "./components/SPopup";

import Footer from "./components/Footer";
import Popup from "./components/Popup";
// import AOS from "aos";
// import "aos/dist/aos.css";

function SApp({ dark, handleDark, setPopup, popup, handleSpanish }) {
  return (
    <div className={dark ? "dark" : "light"}>
      <div>
        <SNavbar
          dark={dark}
          setPopup={setPopup}
          handleDark={handleDark}
          handleSpanish={handleSpanish}
        />
        <SHero />
        <SBanner />
        <SWhyChoose />
        <SAbout setPopup={setPopup} />
        <SFooter />
        <SPopup popup={popup} setPopup={setPopup} />
      </div>
    </div>
  );
}

export default SApp;
