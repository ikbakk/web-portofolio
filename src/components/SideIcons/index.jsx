import React from "react";
import {
  RiFacebookBoxLine,
  RiLinkedinBoxLine,
  RiInstagramLine,
  RiGithubLine,
} from "react-icons/ri";

const SideIcons = () => {
  const icon = [
    { name: <RiFacebookBoxLine />, url: "https://facebook.com/ikbako" },
    { name: <RiLinkedinBoxLine />, url: "https://linkedin.com/in/ikbak" },
    { name: <RiInstagramLine />, url: "https://instagram.com/ikbakkk" },
    { name: <RiGithubLine />, url: "https://github.com/ikbakk" },
  ];
  return (
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
  );
};

export default SideIcons;
