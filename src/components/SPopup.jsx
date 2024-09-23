import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const SPopup = ({ popup, setPopup }) => {
  return (
    <div>
      {popup && (
        <div>
          <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="w-[300px] rounded-md bg-white p-4 shadow-md dark:bg-gray-800 dark:text-white">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Acceso</h1>
                <IoCloseOutline
                  className="cursor-pointer text-2xl"
                  onClick={() => setPopup(false)}
                />
              </div>
              <div className="mt-4">
                <input
                  type="email"
                  placeholder="Introducir Correo Electrónico"
                  className="text-whites mb-4 w-full rounded-md border border-gray-600 px-2 py-1 dark:border-white dark:bg-gray-800"
                />
                <input
                  type="password"
                  placeholder="Introducir Contraseña"
                  className="text-whites mb-4 w-full rounded-md border border-gray-600 px-2 py-1 dark:border-white dark:bg-gray-800"
                />
                <div>
                  <button
                    className="w-full rounded-md bg-primary p-2 text-white"
                    onClick={() => setPopup(false)}
                  >
                    Acceso
                  </button>
                </div>
                <div className="mt-4">
                  <p className="text-center">o iniciar sesión con</p>
                  <div className="mt-2 flex justify-center gap-2">
                    <FaFacebook className="cursor-pointer text-3xl duration-200 hover:text-blue-500" />
                    <FaGoogle className="cursor-pointer text-3xl duration-200 hover:text-blue-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SPopup;
