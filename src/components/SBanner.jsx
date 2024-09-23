import React from "react";
import Apple from "../assets/apple.png";
import Kiwi from "../assets/kiwi.png";
import Leaf from "../assets/leaf.png";
import Lemon from "../assets/lemon.png";
import Tomato from "../assets/tomato.png";
import { FaAngleRight } from "react-icons/fa";

const SBanner = () => {
  return (
    <div className="container relative pb-5">
      <div className="relative z-20">
        <h1
          data-aos="fade-up"
          data-aos-delay="300"
          className="py-[70px] text-center text-2xl font-semibold tracking-wider text-dark dark:text-white"
        >
          Pruebe la Diferencia Saludable
        </h1>
        <div className="space-y-10 px-5">
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            <div>
              <p>
                Sabemos que el <span className="text-primary">tiempo</span> es
                el mayor valor en el mundo moderno. Nuestro servicio de entrega
                de comidas saludables Good Food en España es la respuesta para
                aquellos que quieren comer de manera saludable, ahorrando tiempo
                en comprar alimentos y preparar comidas deliciosas y saludables.
              </p>
            </div>
          </div>
          <div></div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="grid grid-cols-1 gap-4 py-[90px] sm:grid-cols-2"
          >
            <div></div>

            <p>
              Sabemos que el <span className="text-primary">tiempo</span> es el
              mayor valor en el mundo moderno. Nuestro servicio de entrega de
              comidas saludables Good Food en España es la respuesta para
              aquellos que quieren comer de manera saludable, ahorrando tiempo
              en comprar alimentos y preparar comidas deliciosas y saludables.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-offset="0"
          className="mt-10 flex justify-center sm:mt-14"
        >
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
      </div>
      <div
        data-aos="fade-right"
        className="absolute -left-16 top-0 sm:bottom-0 sm:left-0"
      >
        <img
          src={Leaf}
          alt="Leaf Png"
          className="max-w-[160px] opacity-50 sm:opacity-100"
        />
      </div>
      <div
        data-aos="fade-right"
        className="absolute -left-16 bottom-16 sm:bottom-0 sm:left-0"
      >
        <img
          src={Tomato}
          alt="Leaf Png"
          className="max-w-[280px] opacity-50 sm:opacity-100"
        />
      </div>
      <div
        data-aos="fade-left"
        className="absolute -right-16 top-10 sm:right-20"
      >
        <img
          src={Lemon}
          alt="Leaf Png"
          className="max-w-[200px] opacity-50 sm:opacity-100"
        />
      </div>
      <div
        data-aos="fade-left"
        className="absolute -bottom-16 right-0 hidden sm:block"
      >
        <img
          src={Apple}
          alt="Leaf Png"
          className="max-w-[200px] opacity-50 sm:opacity-100"
        />
      </div>
      <div
        data-aos="fade"
        className="absolute left-1/3 top-1/2 mb-5 -translate-x-1/2 -translate-y-1/2 opacity-50"
      >
        <img
          src={Kiwi}
          alt="Leaf Png"
          className="max-w-[180px] opacity-50 sm:opacity-100"
        />
      </div>
    </div>
  );
};

export default SBanner;
