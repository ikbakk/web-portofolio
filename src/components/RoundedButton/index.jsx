import React from "react";

const RoundedButton = ({ text }) => {
  return (
    <h3 className=" rounded-full bg-primaryLight p-4 font-syncopate font-extrabold text-primaryDark outline outline-2 outline-fadeBlack duration-300 sm:text-lg md:text-xl lg:p-6 lg:text-3xl lg:outline-4">
      {text}
    </h3>
  );
};

export default RoundedButton;
