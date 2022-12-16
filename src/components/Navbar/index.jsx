import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MdOutlineHome,
  MdOutlinePsychology,
  MdInfoOutline,
  MdOutlineContacts,
  MdStarRate,
} from "react-icons/md";

export default function NavBar() {
  const [navbar, setNavbar] = useState("Home");
  const icon = (navbar) => {
    if (navbar === "Home") {
      return <MdOutlineHome size={38} />;
    } else if (navbar === "Skills") {
      return <MdOutlinePsychology size={38} />;
    } else if (navbar === "About") {
      return <MdInfoOutline size={38} />;
    } else if (navbar === "Contact") {
      return <MdOutlineContacts size={38} />;
    } else {
      return <MdStarRate size={38} />;
    }
  };
  const menu = [
    { name: "Home", url: "/" },
    { name: "Skills", url: "/skills" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <nav className="fixed top-0 z-10 flex h-20 w-full flex-row bg-white">
      <div className="flex shrink-0 basis-5 items-center justify-center px-2 outline outline-2">
        {icon(navbar)}
      </div>
      <div className="flex basis-40 items-center px-6 outline outline-2">
        <h2 className="font-syncopate font-semibold md:text-4xl lg:text-5xl">
          iqbal firdaus
        </h2>
      </div>
      <div className="z-10 flex basis-50 items-center justify-end bg-paleGreen px-6 outline outline-2">
        <ul className="flex flex-row items-center space-x-10 font-roboto-mono text-fadeBlack md:text-xl lg:text-3xl">
          {menu.map((item, id) => (
            <li key={id}>
              <Link
                className={`
                    z-10 py-2 px-1 duration-300
                    ${
                      navbar === item.name
                        ? "bg-primaryLight text-primaryDark outline outline-2"
                        : "text-black shadow-offset3 outline outline-2 hover:bg-primaryLight hover:text-primaryDark hover:shadow-none"
                    }
                  `}
                to={item.url}
                onClick={() => setNavbar(item.name)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex shrink-0 basis-5 items-center justify-center px-2 outline outline-2"></div>
    </nav>
  );
}
