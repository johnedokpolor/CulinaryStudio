import React from "react";
import { BiSolidFoodMenu } from "react-icons/bi";
import { GiFoodTruck } from "react-icons/gi";
import { MdOutlineFoodBank, MdEmojiFoodBeverage } from "react-icons/md";
const SWhyChoose = () => {
  return (
    <div className="md:py-29 bg-gray-50 py-14 dark:bg-gray-900 dark:text-white">
      <div className="container">
        <h1
          data-aos="fade"
          className="pb-16 text-center text-2xl font-semibold tracking-wider text-dark dark:text-white"
        >
          Por Qué Elegirnos
        </h1>
        <div>
          <div
            data-aos="fade"
            className="grid grid-cols-2 gap-14 sm:gap-4 md:grid-cols-4"
          >
            <div className="flex flex-col items-center justify-center gap-2 px-2 text-center text-dark/70 dark:text-white">
              <p>
                Damos prioridad a los ingredientes frescos de origen local, lo
                que garantiza que cada plato sea de la más alta calidad y rebose
                de sabor.
              </p>
              <p className="translate-x-4 rotate-90 text-5xl text-primary">
                ....
              </p>
              <MdOutlineFoodBank className="text-5xl text-primary" />
            </div>
            <div className="flex flex-col items-center justify-center gap-2 px-2 text-center text-dark/70 dark:text-white">
              <BiSolidFoodMenu className="text-5xl text-secondary" />
              <p className="translate-x-4 rotate-90 text-5xl text-secondary">
                ....
              </p>
              <p>
                Our diverse menu combines seasonal specialties and classic
                favorites, offering something for every palate.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 px-2 text-center text-dark/70 dark:text-white">
              <p>
                Nuestro variado menú combina especialidades de temporada y
                platos clásicos favoritos, ofreciendo algo para cada paladar.
              </p>
              <p className="translate-x-4 rotate-90 text-5xl text-primary">
                ....
              </p>
              <GiFoodTruck className="text-5xl text-primary" />
            </div>
            <div className="flex flex-col items-center justify-center gap-2 px-2 text-center text-dark/70 dark:text-white">
              <MdEmojiFoodBeverage className="text-5xl text-secondary" />
              <p className="translate-x-4 rotate-90 text-5xl text-secondary">
                ....
              </p>
              <p>
                Nuestro ambiente acogedor y nuestro personal atento crean un
                entorno acogedor, perfecto tanto para cenas íntimas como para
                reuniones animadas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SWhyChoose;
