import React from "react";

export const AllMenu = () => {
  const allMenuLink = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div>
      <ul className="flex flex-col md:flex-row justify-center md:space-x-8">
        {allMenuLink.map((link, index) => (
          <li className="relative" key={index}>
            <a
              href={link.path}
              className="menu-text-link text-[#fff] hover:text-[#fff] "
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
