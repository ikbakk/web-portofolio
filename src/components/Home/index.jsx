import React from "react";
import SideIcons from "../SideIcons";
import HomeHeader from "../HomeHeader";

const Home = () => {
  const name = "MUHAMMAD IQBAL FIRDAUS";
  return (
    <div className={`flex h-screen w-screen flex-col`}>
      <div className="h-full bg-gradient-to-bl from-paleSkin to-palePink lg:h-full">
        <HomeHeader name={name} />
      </div>
    </div>
  );
};

export default Home;
