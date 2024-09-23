import React from "react";
import { FaAngleRight } from "react-icons/fa";
const PrimaryButton = () => {
  return (
    <div>
      <div className="group flex w-fit items-center">
        <button className="h-[40px] bg-primary px-3 py-2 text-white">
          Choose Your Meal Plan
        </button>
        <div className="flex h-[40px] items-center bg-primaryDark p-2 text-base text-white transition duration-200 group-hover:translate-x-2">
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
};

export default PrimaryButton;
