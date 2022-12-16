import React from "react";

const ButtonInvert = ({ text }) => {
  return (
    <div className="shadow-offset10l shadow-fadeBlack duration-200 hover:shadow-none">
      <button className=" outline-3 bg-fadeBlack p-10 font-syncopate text-3xl font-extrabold text-white shadow-offset8l outline outline-fadeBlack duration-200 hover:bg-white hover:text-primaryDark hover:shadow-offset10l hover:shadow-fadeBlack active:bg-primaryLight">
        {text}
      </button>
    </div>
  );
};

export default ButtonInvert;
