import React from "react";

export const AllMenu = () => {
  const allMenuLink = [
    { name: "Home", path: "/" },
    { name: "Fashion", path: "/about" },
    { name: "Accessories", path: "/services" },
    { name: "About Us", path: "/contact" },
    { name: "More", path: "/contact" },
  ];

  return (
    <div>
      <ul className="flex flex-col md:flex-row justify-center md:space-x-9">
        {allMenuLink.map((link, index) => (
          <li className="relative" key={index}>
            <a href={link.path} className="menu-text-link link-size ">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
