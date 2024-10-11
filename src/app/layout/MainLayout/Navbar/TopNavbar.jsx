import React, { useState } from "react";
import bangla from "@/assets/Navbar/bangla.png";
import english from "@/assets/Navbar/usa.jpg";
import hindi from "@/assets/Navbar/india.png";
import Image from "next/image";

export const TopNavbar = () => {
  // language
  const [selected, setSelected] = useState({
    label: "Bangla",
    image: bangla,
  });

  const [isOpenL, setIsOpenL] = useState(false); // Track dropdown open/close state

  const options = [
    { label: "Bangla", image: bangla },
    { label: "English", image: english },
    { label: "Hindi", image: hindi },
  ];

  const handleSelect = (option) => {
    setSelected(option); // Update the selected option
    setIsOpenL(false);
  };

  const toggleDropdown = () => {
    setIsOpenL(!isOpenL); // Correctly toggle the isOpenL state
  };

  return (
    <div>
      <div className="bg-darkgray">
        <div className="relative max-width px-2 md:px-0 mx-auto flex justify-between  items-center h-[46px] text-white text-center">
          <div className="flex gap-2 md:gap-5">
            <div className="flex items-center gap-1 md:gap-2 cursor-pointer hover:underline">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="md:w-[16px] md:h-[16px] w-[14px] h-[14px]"
                  color="#fff"
                  fill="none"
                >
                  <path
                    d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>{" "}
              <p className="md:text-[15px] text-[12px]">Support</p>
            </div>
            <div className="w-[1px] h-[20px] bg-gray-400"></div>
            <div className="hidden md:flex items-center gap-1 md:gap-2 cursor-pointer hover:underline">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="md:w-[16px] md:h-[16px] w-[14px] h-[14px]"
                  color="#fff"
                  fill="none"
                >
                  <path
                    d="M15.1287 13.7468C14.9601 13.9092 14.7347 14 14.5001 14C14.2655 14 14.0401 13.9092 13.8715 13.7468C12.3272 12.2504 10.2576 10.5788 11.2669 8.15187C11.8126 6.83966 13.1225 6 14.5001 6C15.8777 6 17.1876 6.83966 17.7333 8.15187C18.7413 10.5757 16.6768 12.2555 15.1287 13.7468Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                  <path
                    d="M14.5 9.5H14.509"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                  <path
                    d="M9 15L5 19M15 21L3 9"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
              <p className="md:text-[15px] text-[12px]"> Store Location</p>
            </div>
          </div>
          <p className=" hidden md:flex md:text-[15px] text-[12px] text-start">
            Summer Sale Season Up To 25% OFF -{" "}
            <span className="span-price underline ps-[2px] cursor-pointer">
              {" "}
              Shop Now
            </span>
          </p>
          <p className="md:hidden flex gap-1 md:text-[15px] text-[13px] ps-10 text-start">
            Our Store 25% OFF -{" "}
            <span className="span-price underline ps-[2px] cursor-pointer">
              {" "}
              Shop Now
            </span>
          </p>

          <div className="flex bg-darkgray relative h-[100%] items-center  w-[115px] justify-end">
            <div className="relative max-w-xs md:text-[15px] text-white">
              <div className="inset-y-0 my-auto h-[100%] flex items-center">
                <div className="custom-select text-sm outline-none md:text-[15px] text-[12px] h-full bg-darkgray">
                  {/* Selected option */}
                  <div
                    className="selected flex items-center cursor-pointer"
                    onClick={toggleDropdown}
                  >
                    <Image
                      width={20}
                      height={20}
                      src={selected.image}
                      alt={selected.label}
                    />
                    <span className="ps-[8px] pe-[2px] md:text-[15px] text-[12px]">
                      {selected.label}
                    </span>{" "}
                    <span>
                      <svg
                        className={` ${isOpenL ? "-rotate-90" : "rotate-90"}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        color="#fff"
                        fill="none"
                      >
                        <path
                          d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <div className="ms-2 w-[0.5px] h-[20px] bg-gray-400"></div>
                  </div>

                  {/* Dropdown options */}
                  {isOpenL && (
                    <div className="options absolute z-[1000000] top-full left-[-12px] bg-darkgray  w-[100px] mt-2 rounded-md shadow-md">
                      {options.map((option) => (
                        <div
                          key={option.label}
                          className="option p-2 hover:bg-gray-700 flex items-center space-x-2 cursor-pointer"
                          onClick={() => handleSelect(option)}
                        >
                          <Image
                            width={20}
                            height={20}
                            src={option.image}
                            alt={option.label}
                          />
                          <span>{option.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
