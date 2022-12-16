import React from "react";
import ButtonIvert from "../BigButtonInvert";
import RoundedButton from "../RoundedButton";
import PhotoCard from "../PhotoCard";

const HomeHeader = ({ name }) => {
  return (
    <div className="m-8 flex basis-full flex-wrap space-y-7 p-8 lg:flex-nowrap xl:flex-nowrap">
      <div className="flex basis-full flex-col space-y-4 ">
        <h1 className="mt-5 px-8 text-left font-syncopate text-6xl font-extrabold text-primaryDark duration-300 md:text-6xl lg:text-8xl">
          HI, IM<br></br>
          {name}
        </h1>
        <div className="flex px-8 py-4">
          <RoundedButton text="UNDERGRADUATE" />
        </div>
        <p className="px-8 py-4 text-justify font-roboto-mono text-2xl text-primaryDark">
          Electrical engineering student who somehow got into web development
          since July 2022 when try to combine IoT and Web development because of
          project for engineering degree.
        </p>
        <div className="flex px-10 py-4">
          <ButtonIvert text="DOWNLOAD CV" />
        </div>
      </div>
      <div className=" flex basis-full items-center justify-center p-2">
        <PhotoCard src="#" />
      </div>
    </div>
  );
};

export default HomeHeader;
