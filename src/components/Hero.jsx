import React from "react";
import HeroImg from "../assets/hero.png";
import HeroBg from "../assets/heroBg.png";
import PrimaryButton from "./PrimaryButton";
import AOS from "aos";

const BgStyle = {
  backgroundImage: `url(${HeroBg})`,
  backgroundRepeat: "no-repeat",
  backgroundPostion: "center",
  backgroundSize: "cover",
};
const Hero = () => {
  return (
    <div style={BgStyle} className="py-5">
      <div className="flex flex-col items-center justify-between px-5 sm:flex-row sm:px-10">
        <div className="order-2 space-y-7 dark:text-black sm:order-1">
          <h1 data-aos="fade-up" className="max-w-[480px] text-4xl sm:text-5xl">
            Fresh and Healthy Meal Plan
            <span className="font-cursive text-secondary"> Delivery</span> in
            Spain
          </h1>
          <p data-aos="fade-up" data-aos-delay="300">
            Delcious Meals Delivered to Your Doorstep from $132.95 per Week
          </p>
          <div data-aos="fade-up" data-aos-delay="500">
            <PrimaryButton />
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="500"
          className="order-1 sm:order-2"
        >
          <img
            src={HeroImg}
            alt=""
            className="sm:scale:125 z-20 w-[600px] sm:translate-y-16"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
