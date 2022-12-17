import React, { useState } from "react";

const Header = ({ setDark, dark }) => {
  const menu = [{ name: "Home" }, { name: "About" }, { name: "Contact" }];

  const MenuItems = () =>
    menu.map((item) => {
      return (
        <li>
          <a>{item.name}</a>
        </li>
      );
    });

  return (
    <nav className="navbar space-x-10 bg-base-100 py-5 font-syncopate">
      <div className="flex-1">
        <a className="btn-ghost btn text-4xl font-bold normal-case">
          Portofolio
        </a>
      </div>
      <div className="flex-none space-x-20">
        <ul className="menu menu-horizontal px-1 text-2xl">
          <MenuItems />
        </ul>
        <div className="flex flex-row space-x-4">
          <h3>Night Mode</h3>
          <input
            type="checkbox"
            onClick={() => {
              setDark(!dark);
            }}
            className="toggle-primary toggle"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
