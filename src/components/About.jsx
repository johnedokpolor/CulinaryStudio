import React from "react";
import PolygonBg from "../assets/polygon.png";
import Vector from "../assets/vector-wave.png";
import { FaUser } from "react-icons/fa";

const BgStyle = {
  backgroundImage: `url(${PolygonBg})`,
  backgroundRepeat: "no-repeat",
  backgroundPostion: "center",
  backgroundSize: "cover",
  position: "relative",
};
const About = ({ setPopup }) => {
  return (
    <div style={BgStyle} className="py-14">
      <div className="container min-h-[500px]">
        <h1
          data-aos="fade"
          className="pt-20 text-center text-2xl font-semibold tracking-wider text-white"
        >
          About Us
        </h1>
        <div
          data-aos="zoom-in"
          className="my-10 bg-white/80 p-10 text-center dark:text-dark"
        >
          Welcome to The Culinary Studio, where culinary excellence meets warm
          hospitality. Nestled in the heart of Spain, we pride ourselves on
          crafting unforgettable dining experiences that celebrate both local
          flavors and global influences. Our menu features a carefully curated
          selection of dishes, each prepared with the finest ingredients sourced
          from local farmers and trusted purveyors. From seasonal specials to
          timeless classics, our offerings reflect our commitment to quality and
          innovation.
          <br /> At The Culinary Studio, we believe that dining is not just
          about food; it’s about creating memories. Our inviting atmosphere and
          attentive staff are dedicated to making your visit enjoyable, whether
          you’re celebrating a special occasion or enjoying a casual meal with
          friends.Join us for lunch, dinner, or a weekend brunch, and discover
          why The Culinary Studio is a beloved destination for food enthusiasts
          in Spain. We look forward to welcoming you!
          <div className="flex justify-center pt-10">
            <button
              onClick={() => setPopup(true)}
              className="flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2 text-white transition duration-300 hover:scale-105"
            >
              <FaUser />
              My Account
            </button>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 w-full text-red-300">
        <img src={Vector} alt="Vector Img" className="mx-auto" />
      </div>
    </div>
  );
};

export default About;
