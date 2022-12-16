import React from "react";
import {
  RiFacebookBoxLine,
  RiLinkedinBoxLine,
  RiInstagramLine,
  RiGithubLine,
} from "react-icons/ri";

const Home = () => {
  const icon = [
    { name: <RiFacebookBoxLine />, url: "https://facebook.com/ikbako" },
    { name: <RiLinkedinBoxLine />, url: "https://linkedin.com/in/ikbak" },
    { name: <RiInstagramLine />, url: "https://instagram.com/ikbakkk" },
    { name: <RiGithubLine />, url: "https://github.com/ikbakk" },
  ];

  const name = "MUHAMMAD IQBAL FIRDAUS";
  return (
    <div className="relative flex h-screen flex-col pt-10">
      <div className="relative flex flex-row bg-gradient-to-bl from-paleSkin to-palePink outline outline-2">
        <div className="flex w-48 shrink-0 basis-5 items-center justify-center px-2">
          <ul className="flex flex-col space-y-10">
            {icon.map((item, id) => (
              <li key={id}>
                <a
                  className="text-fadeBlack duration-300 hover:text-paleGreen sm:text-2xl md:text-4xl lg:text-6xl"
                  href={item.url}
                  target="_blank">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex basis-90 outline outline-2 outline-fadeBlack">
          <div className="m-8 flex basis-full flex-wrap space-y-7 p-8 lg:flex-nowrap xl:flex-nowrap">
            <div className="flex basis-full flex-col space-y-4 ">
              <h1 className="mt-5 px-8 text-left font-syncopate text-6xl font-extrabold text-primaryDark duration-300 md:text-6xl lg:text-8xl">
                HI, IM<br></br>
                {name}
              </h1>
              <div className="flex px-8 py-4">
                <h3 className=" rounded-full bg-primaryLight p-4 font-syncopate font-extrabold text-primaryDark outline outline-2 outline-fadeBlack duration-300 sm:text-lg md:text-xl lg:p-6 lg:text-3xl lg:outline-4">
                  UNDERGRADUATE
                </h3>
              </div>
              <p className="px-8 py-4 text-justify font-roboto-mono text-2xl text-primaryDark">
                Electrical engineering student who somehow got into web
                development since July 2022 when try to combine IoT and Web
                development because of project for engineering degree.
              </p>
              <div className="flex px-10 py-4">
                <div className="shadow-offset10l shadow-fadeBlack duration-200 hover:shadow-none">
                  <button className=" outline-3 bg-fadeBlack p-10 font-syncopate text-3xl font-extrabold text-white shadow-offset8l outline outline-fadeBlack duration-200 hover:bg-white hover:text-primaryDark hover:shadow-offset10l hover:shadow-fadeBlack active:bg-primaryLight">
                    DOWNLOAD CV
                  </button>
                </div>
              </div>
            </div>
            <div className=" flex basis-full items-center justify-center p-2">
              <div className="flex h-4/6 w-4/6 ">
                <div className="h-full w-full shadow-offset9tl shadow-fadeBlack outline outline-2 outline-fadeBlack">
                  aa
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flexshrink-0 basis-5"></div>
      </div>
    </div>
  );
};

export default Home;
