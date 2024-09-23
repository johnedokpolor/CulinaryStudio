import React from "react";
import { FaMoon, FaSun, FaUser, FaAngleDown } from "react-icons/fa";
import Us from "../assets/usflag.png";
import Logo from "../assets/logo.png";

const SNavlinks = [
  {
    id: 1,
    name: "Casa",
    link: "#",
  },
  {
    id: 2,
    name: "Sobre",
    link: "#",
  },
  {
    id: 3,
    name: "Contacto",
    link: "#",
  },
];
const SDropdownLinks = [
  {
    id: 1,
    name: "Venduras",
    link: "#",
  },
  {
    id: 2,
    name: "Frutas",
    link: "#",
  },
  {
    id: 3,
    name: "Granos",
    link: "#",
  },
];
const SNavbar = ({ dark, handleDark, setPopup, handleSpanish }) => {
  return (
    <div className="bg-white shadow-md dark:bg-gray-800 dark:shadow-white/10">
      <div className="container flex items-center justify-between px-3 py-4 sm:py-3 md:justify-evenly">
        <div>
          <img src={Logo} className="w-[50px] rounded-full" alt="logo.png" />
        </div>
        <div>
          <ul className="flex items-center sm:gap-10">
            {SNavlinks.map(({ id, name, link }) => (
              <li className="hidden md:block" key={id}>
                <a
                  href={link}
                  className="inline-block text-lg font-semibold hover:text-primary"
                >
                  {name}
                </a>
              </li>
            ))}
            <li className="group relative hidden cursor-pointer md:block">
              <a
                href=""
                className="flex items-center space-x-1 text-xl font-semibold hover:text-primary"
              >
                <p>Categorias</p>
                <FaAngleDown className="text-md inline-block text-sm transition duration-300 group-hover:rotate-180" />
              </a>
              <div className="absolute z-50 hidden w-[200px] bg-white p-2 text-black shadow-sm group-hover:block dark:bg-gray-900 dark:text-white dark:shadow-md dark:shadow-white/10">
                <ul>
                  {SDropdownLinks.map(({ id, name, link }) => (
                    <li key={id}>
                      <a
                        href="#"
                        className="inline-block w-full rounded-md p-2 text-lg font-semibold hover:bg-primary/20 hover:text-primary"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li onClick={() => setPopup(true)}>
              <button className="flex items-center justify-center gap-2 rounded-md bg-secondary px-5 py-2 text-white transition duration-300 hover:scale-105 md:cursor-pointer">
                <FaUser />
                Mi Cuenta
              </button>
            </li>
            <button className="ml-5" onClick={handleDark}>
              {dark ? <FaSun /> : <FaMoon />}
            </button>
            <img
              src={Us}
              className="ml-5 w-[30px] rounded-full md:cursor-pointer"
              onClick={handleSpanish}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SNavbar;
