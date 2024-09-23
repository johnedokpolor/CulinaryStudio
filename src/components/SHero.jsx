import React from "react";
import HeroImg from "../assets/hero.png";
import HeroBg from "../assets/heroBg.png";
import { FaAngleRight } from "react-icons/fa";

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
            Plan de Comida Fresca y Saludable a
            <span className="font-cursive text-secondary"> Domicilio</span> en
            España
          </h1>
          <p data-aos="fade-up" data-aos-delay="300">
            Comidas Deliciosas Entregadas a Domicilio Desde $132,95 Por Semana
          </p>
          <div data-aos="fade-up" data-aos-delay="500">
            <div>
              <div className="group flex w-fit items-center">
                <button className="h-[40px] bg-primary px-3 py-2 text-white">
                  Elige tu Plan de Alimentación
                </button>
                <div className="flex h-[40px] items-center bg-primaryDark p-2 text-base text-white transition duration-200 group-hover:translate-x-2">
                  <FaAngleRight />
                </div>
              </div>
            </div>
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
