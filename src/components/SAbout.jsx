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
const SAbout = ({ setPopup }) => {
  return (
    <div style={BgStyle} className="py-14">
      <div className="container min-h-[500px]">
        <h1
          data-aos="fade"
          className="pt-20 text-center text-2xl font-semibold tracking-wider text-white"
        >
          Sobre Nosotros
        </h1>
        <div
          data-aos="zoom-in"
          className="my-10 bg-white/80 p-10 text-center dark:text-dark"
        >
          Bienvenido a The Culinary Studio, donde la excelencia culinaria se
          combina con una cálida hospitalidad. Ubicados en el corazón de España,
          nos enorgullecemos de crear experiencias gastronómicas inolvidables
          que celebran tanto los sabores locales como las influencias globales.
          Nuestro menú presenta una selección cuidadosamente seleccionada de
          platos, cada uno preparado con los mejores ingredientes provenientes
          de agricultores locales y proveedores de confianza. Desde especiales
          de temporada hasta clásicos atemporales, nuestras ofertas reflejan
          nuestro compromiso con la calidad y la innovación.
          <br /> En The Culinary Studio, creemos que comer no se trata solo de
          comida; se trata de crear recuerdos. Nuestro ambiente acogedor y
          nuestro personal atento están dedicados a hacer que su visita sea
          agradable, ya sea que esté celebrando una ocasión especial o
          disfrutando de una comida informal con amigos. Únase a nosotros para
          el almuerzo, la cena o un brunch de fin de semana y descubra por qué
          The Culinary Studio es un destino querido por los entusiastas de la
          comida en España. ¡Esperamos darle la bienvenida!
          <div className="flex justify-center pt-10">
            <button
              onClick={() => setPopup(true)}
              className="flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2 text-white transition duration-300 hover:scale-105"
            >
              <FaUser />
              Mi Cuenta
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

export default SAbout;
