import React from "react";

const Navbar = () => {
  return (
    <div className="md:px3 bg-white px-2 py-2.5 sm:px-4 ">
      <div className="md-w-auto hidden w-full md:block">
        <ul className="mt-4 flex flex-col p-4 md:flex-row md:space-x-8">
          <li>
            <a href="#" className="pr4  py-2 px-3 hover:bg-gray-500">
              HOME
            </a>
          </li>
          <li>
            <a href="#" className="pr4  py-2 px-3 hover:bg-gray-500">
              ABOUT
            </a>
          </li>
        </ul>
        <button>Get in touch</button>
      </div>
    </div>
  );
};

export default Navbar;
