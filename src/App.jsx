import { useState, useEffect, createContext } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import WhyChoose from "./components/WhyChoose";
import About from "./components/About";
import SApp from "./SApp";
import Footer from "./components/Footer";
import Popup from "./components/Popup";
import AOS from "aos";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import "aos/dist/aos.css";

import "./style.css";

function App() {
  const [dark, setDark] = useState(
    localStorage.getItem("dark")
      ? JSON.parse(localStorage.getItem("dark"))
      : false,
  );
  const [popup, setPopup] = useState(false);
  const [spanish, setSpanish] = useState(
    localStorage.getItem("spanish")
      ? JSON.parse(localStorage.getItem("spanish"))
      : false,
  );

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(dark));
  }, [dark]);
  useEffect(() => {
    localStorage.setItem("spanish", JSON.stringify(spanish));
  }, [spanish]);
  function handleDark() {
    setDark((prev) => !prev);
  }
  function handleSpanish() {
    setSpanish((prev) => !prev);
  }
  return (
    <Router>
      <div className={dark ? "dark" : "light"}>
        <Routes>
          <Route
            path="/spanish"
            element={
              !spanish ? (
                <Navigate to="/" />
              ) : (
                <SApp
                  dark={dark}
                  popup={popup}
                  setPopup={setPopup}
                  handleDark={handleDark}
                  handleSpanish={handleSpanish}
                />
              )
            }
          />
          <Route
            path="/"
            element={
              spanish ? (
                <Navigate to="./spanish" />
              ) : (
                <div>
                  <Navbar
                    dark={dark}
                    setPopup={setPopup}
                    handleDark={handleDark}
                    handleSpanish={handleSpanish}
                  />
                  <Hero />
                  <Banner />
                  <WhyChoose />
                  <About setPopup={setPopup} />
                  <Footer />
                  <Popup popup={popup} setPopup={setPopup} />
                </div>
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
