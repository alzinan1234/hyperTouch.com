"use client";
import { useState, useEffect } from "react";
import sliderOne from "@/assets/Banner/banner2.png";
import sliderTwo from "@/assets/Banner/banner1.jpg";
import sliderThree from "@/assets/Banner/benner.jpg";

import "./Banner.css";

const slides = [
  {
    banner_title: " Madame Man Black Full Sleeve",
    banner_image: sliderOne,
    banner_title_color: "#000",
    link: "/",
    button_bg: "#222222",
  },

  {
    banner_title: " Madame Man Black Full Sleeve",
    banner_image: sliderTwo,
    banner_title_color: "#000",
    link: "/",
    button_bg: "#222222",
  },
  {
    banner_title: " Madame Man Black Full Sleeve 22",
    banner_image: sliderThree,
    banner_title_color: "#fff",
    link: "/",
    button_bg: "#222222",
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isRun, setsClick] = useState(null);
  setTimeout(() => {
    setsClick(null);
  }, 200);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <div className="overflow-hidden ">
      <div className="relative mx-auto h-[50vh] md:h-[80vh] overflow-hidden ">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentSlide
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-0 pointer-events-none"
            }  ${
              slide.layout
            } h-[100%] w-full bg-cover bg-center flex items-center justify-center object-contain`}
            style={{
              backgroundImage: `url(${slide?.banner_image?.src})`,
              backgroundAttachment: "fixed",
            }}
          >
            <div className="absolute z-[20] top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out flex md:flex-row items-center">
              {/* ------ banner title----- */}
              <div
                className={`md:w-[50%] relative z-[20] md:ps-[90px] flex flex-col justify-center items-center p-4 md:pl-12 text-left transition-transform duration-700 ease-in-out `}
              >
                {/* Make sure to add proper z-index and no pointer-events issues */}
                <p
                  className={`banner-title-1 ling-hight-26px md:text-[22px] px-5 md:px-0 text-center md:text-start text-[14px] w-[100%] relative z-[20] text-[${
                    slide?.banner_title_color
                  }] cursor-text
                    transition-transform duration-700 ease-in-out ${
                      index === currentSlide
                        ? "translate-x-0"
                        : "translate-x-16"
                    }
                    `}
                >
                  100% Original Products
                </p>

                <h2
                  className={`banner-title-2 ling-hight-26px xs:px-1 sm:px-5 md:px-0 text-center md:text-start text-[38px] font-extrabold md:text-[68px] md:mt-[20px] text-[${
                    slide?.banner_title_color
                  }] cursor-text
                    transition-transform duration-700 ease-in-out ${
                      index === currentSlide
                        ? "translate-x-0"
                        : "translate-x-14"
                    }
                    `}
                >
                  {slide.banner_title?.slice(0, 200)}
                </h2>

                <p
                  className={`hidden md:flex banner-title-1 ling-hight-26px text-[16px] md:text-[25px] px-5 md:px-0 text-center md:text-start justify-center md:justify-start w-[100%] md:mt-[20px] text-[${
                    slide?.banner_title_color
                  }] cursor-text
                    transition-transform duration-500 ease-in-out ${
                      index === currentSlide
                        ? "translate-x-0"
                        : "translate-x-16"
                    }
                    `}
                >
                  This Month From{" "}
                  <span className="span-price text-[18px] md:text-[34px]">
                    $59.00
                  </span>
                </p>

                <div
                  className={`flex justify-center md:justify-start w-[100%] mt-[15px] md:mt-[30px] transition-transform duration-700 ease-in-out ${
                    index === currentSlide ? "translate-y-0" : "translate-y-12"
                  }`}
                >
                  <button
                    className={`banner-button md:text-[17px] text-[12px] px-[20px] md:px-[34px] md:py-[14px] py-[5px] cursor-pointer`}
                    style={{ backgroundColor: slide.button_bg }}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className={` ${isRun === "prev" && "card1"}`}></div>
        {/* Next and Previous Buttons */}
        <button
          onClick={prevSlide}
          className={`hidden md:block absolute duration-500 left-4 bottom-0 md:top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full `}
        >
          <div id="arrow_2" className={`arrow-wrapper relative `}>
            <div className="arrow arrow--left flex items-center justify-center">
              <span onClick={() => setsClick("prev")} className={` me-2 mt-2`}>
                Prev
              </span>
            </div>
          </div>
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:block absolute right-4 bottom-0 md:top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full"
        >
          <div id="arrow_2" className="arrow-wrapper relative  ">
            <div className="arrow arrow--right flex items-center justify-center">
              <span onClick={() => setsClick("next")} className="me-2 mt-2">
                Next
              </span>
            </div>
          </div>
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`md:w-3 md:h-3 w-2 h-2 rounded-full border-2 border-white p-1 ${
                index === currentSlide ? "bg-gray-500" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
