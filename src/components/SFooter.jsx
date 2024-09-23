import React, { useRef } from "react";
import { FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactUs = [
  {
    id: 1,
    icon: <IoLocationSharp />,
    text: "Calle de Los Ciegos, 12, 28005 Madrid",
  },
  {
    id: 2,
    icon: <FaPhone />,
    text: "+34 756 176 987 - Ventas y Servicios",
    text2: "+34 353 997 736 - Consultas de Contratación",
    text3: "+34 234 633 736 - Whatsapp",
  },
];
const Footer = () => {
  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("service_vgjxbmq", "template_wrfoe07", form.current, {
        publicKey: "IIAyOUXCoK6thePF5",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          Swal.fire({
            title: "El mensaje ha sido enviado exitosamente",
            text: "Tu mensaje está en camino",
            icon: "success",
            timer: 2000,
            timerProgressBar: true,
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          Swal.fire({
            title: "El envío del mensaje no fue exitoso",
            text: "Se produjo un error",
            icon: "error",
            timer: 2000,
            timerProgressBar: true,
          });
        },
      );
  }
  return (
    <div className="mt-10 text-white">
      <div
        data-aos="fade-down"
        className="container rounded-t-3xl bg-gradient-to-b from-primary to-primaryDark px-5"
      >
        <div>
          <h1 className="pb-5 pt-10 text-center text-2xl font-semibold tracking-wider text-white">
            Contacta con Nosotros
          </h1>

          <div className="border-b-2 border-white pb-6 md:flex md:justify-around">
            <div className="flex justify-center">
              <form
                onSubmit={sendEmail}
                ref={form}
                className="mb-5 flex flex-col items-center"
                action=""
              >
                <input
                  required
                  className="m-3 block w-[350px] rounded-lg border-2 border-black/50 p-4 text-dark outline-0 md:w-[500px]"
                  type="text"
                  name="name"
                  placeholder="Tu Nombre"
                />
                <input
                  required
                  className="m-3 block w-[350px] rounded-lg border-2 border-black/50 p-4 text-dark outline-0 md:w-[500px]"
                  type="text"
                  name="email"
                  placeholder="Tu Correo Electrónico"
                />
                <textarea
                  required
                  className="m-3 block h-[400px] w-[350px] rounded-lg border-2 border-black/50 p-4 text-dark outline-0 md:w-[500px]"
                  type="text"
                  name="message"
                  placeholder="Tu Mensaje"
                />
                <button className="flex items-center gap-2 rounded-md bg-secondary px-5 py-2 text-white transition duration-300 hover:scale-105">
                  <MdEmail />
                  Entregar
                </button>
              </form>
            </div>
            <div className="flex flex-col items-center gap-16 md:gap-32">
              {ContactUs.map(({ id, icon, text, text2, text3 }) => (
                <div key={id} className="space-y-4">
                  <div className="flex justify-center text-5xl">{icon}</div>
                  <div>
                    <p>{text}</p>
                    {text2 && <p>{text2}</p>}
                    {text3 && <p>{text3}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between p-4">
            <p>
              &copy; {new Date().getFullYear()} The Culinary Studio. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="">Política de privacidad</a>
              <a href="">Términos y condiciones</a>
            </div>
          </div>
          <p className="pb-4 text-center font-semibold text-white">
            Hecho con 💓 por GLtech
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
