import React from "react";
import SideIcons from "../SideIcons";
import HomeHeader from "../HomeHeader";

const Home = () => {
  const name = "MUHAMMAD IQBAL FIRDAUS";
  return (
    <div className="relative flex h-screen flex-col pt-10">
      <div className="relative flex flex-row bg-gradient-to-bl from-paleSkin to-palePink outline outline-2">
        {/* LeftSide */}
        <div className="flex w-48 shrink-0 basis-5 items-center justify-center px-2">
          <SideIcons />
        </div>
        {/* LeftSide */}
        {/* Mid */}
        <div className="flex basis-90 outline outline-2 outline-fadeBlack">
          <HomeHeader name={name} />
        </div>
        {/* Mid */}
        {/* RightSide */}
        <div className="flexshrink-0 basis-5"></div>
        {/* RightSide */}
      </div>
    </div>
  );
};

export default Home;
