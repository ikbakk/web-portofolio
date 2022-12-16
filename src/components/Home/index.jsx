import React from "react";
import { MdOutlineHome } from "react-icons/md";

const Home = () => {
  const icon = [
    { name: "aaa", url: "aaaa" },
    { name: "bbbb", url: "bbbb" },
  ];

  const name = "MUHAMMAD IQBAL FIRDAUS";
  return (
    <div className="relative top-20 flex h-screen flex-col">
      <div className="relative flex flex-row  bg-paleSkin outline outline-2">
        <div className="flex w-48 shrink-0 basis-5 items-center justify-center px-2">
          <ul className="flex flex-col">
            {icon.map((item, id) => (
              <li key={id}>{/* <MdOutlineHome size={38} /> */}aaa</li>
            ))}
          </ul>
        </div>
        <div className="flex basis-90 outline outline-2 outline-fadeBlack">
          <div className="m-8 flex basis-full flex-wrap space-y-7 p-8 md:flex-nowrap lg:flex-nowrap xl:flex-nowrap">
            <div className="flex basis-1/2 flex-col space-y-6">
              <h1 className="px-8 text-justify font-syncopate text-8xl font-extrabold text-primaryDark">
                HI, IM<br></br>
                {name}
              </h1>
              <div className="flex px-8 py-4">
                <h3 className="rounded-full bg-primaryLight p-6 font-syncopate text-3xl font-extrabold text-primaryDark outline outline-4 outline-fadeBlack">
                  STUDENT
                </h3>
              </div>
              <p className="px-8 py-4 font-roboto-mono text-2xl text-primaryDark">
                Electrical engineering student who somehow got into web
                development when try to combine IoT and Web development because
                of project for his engineering degree.
              </p>
              <div className="flex px-10 py-4">
                <div className="shadow-offset10l shadow-fadeBlack duration-200 hover:shadow-none">
                  <button className=" outline-3 bg-fadeBlack p-10 font-syncopate text-3xl font-extrabold text-white shadow-offset8l outline outline-fadeBlack duration-200 hover:bg-white hover:text-primaryDark hover:shadow-offset10l hover:shadow-fadeBlack active:bg-primaryLight">
                    DOWNLOAD CV
                  </button>
                </div>
              </div>
            </div>
            <div className=" flex basis-1/2 bg-black">
              <div>
                <h1 className="font-roboto-mono text-8xl text-white">
                  Hi, Im {name}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flexshrink-0 basis-5"></div>
      </div>

      <div className="flex outline outline-2">
        <MdOutlineHome />
      </div>
    </div>
  );
};

export default Home;
