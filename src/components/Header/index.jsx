import React, { useState } from "react";

const Header = ({ setDark, dark }) => {
  const menu = [{ name: "Home" }, { name: "About" }, { name: "Contact" }];

  const MenuItems = () =>
    menu.map((item) => {
      return (
        <li className="font-roboto-mono">
          <a>{item.name}</a>
        </li>
      );
    });

  return (
    <nav className="navbar space-x-10 bg-base-100 py-5 duration-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn-ghost btn lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 text-xl shadow">
            <MenuItems />
          </ul>
        </div>
        <a className="btn-ghost btn font-syncopate text-5xl normal-case">
          Portofolio
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-3xl">
          <MenuItems />
        </ul>
      </div>
      <div className="navbar-end font-syncopate text-xl font-semibold">
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
