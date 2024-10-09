"use client";
import { useState, useEffect } from "react";
import sliderOne from "@/assets/Banner/banner1.jpg";
import sliderTwo from "@/assets/Banner/banner2.jpg";
import sliderFore from "@/assets/Banner/benner.jpg";
import "./BannerText.css";

import "./Banner.css";

const slides = [
  {
    text: " Madame Women Black Full Sleeve",
    subText: "NEW TREND",
    buttonText: "DISCOVER MORE",
    image: sliderOne,
    textStyle: "text-black font-bold",
    subTextStyle: "text-red-500",
    buttonStyle: "text-sm font-medium underline",
    layout: "justify-start",
  },

  {
    text: "Shop the Best in Men Clothing",
    subText: "NEW TREND",
    buttonText: "DISCOVER MORE",
    image: sliderFore,
    textStyle: "text-black font-bold",
    subTextStyle: "text-red-500",
    buttonStyle: "text-sm font-medium underline",
    layout: "justify-start",
  },
  {
    text: "Latest in Men's Fashion World",
    subText: "NEW TREND",
    buttonText: "DISCOVER MORE",
    image: sliderTwo,
    textStyle: "text-black font-bold",
    subTextStyle: "text-red-500",
    buttonStyle: "text-sm font-medium underline",
    layout: "justify-start",
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
    }, 80000); // Change slide every 4 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <div className="overflow-hidden ">
      <div className="relative mx-auto h-[80vh] overflow-hidden ">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute  left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentSlide
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-0"
            } flex md:flex-row items-center ${
              slide.layout
            } h-[100%] w-full bg-cover bg-center flex items-center justify-center`}
            style={{
              backgroundImage: `url(${slide.image.src})`,
              backgroundAttachment: "fixed",
            }}
          >
            <div className="absolute borders top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out flex md:flex-row items-center">
              {/* ------ baner title----- */}
              <div
                className={`w-[50%] relative borders z-[2000000]  md:ps-[90px] flex flex-col justify-center items-center  p-4 md:pl-12 text-left transition-transform duration-700 ease-in-out ${
                  index === currentSlide ? "translate-x-0" : "translate-x-5"
                }`}
              >
                <p className="banner-title-1 text-start w-[100%] relative z-[20000000]">
                  100% Original Products
                </p>

                <h2
                  className={`banner-title-2 md:mt-[20px] ${slide.textStyle}`}
                >
                  {slide.text?.slice(0, 200)} <br />
                </h2>

                <p className="banner-title-1 w-[100%] md:mt-[20px]">
                  This Month From <span className="span-price">$59.00</span>
                </p>

                <div className="flex w-[100%] md:mt-[30px]">
                  <button className={` ${slide.buttonStyle} shiny-cta`}>
                    {slide.buttonText}
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
          className={`absolute  duration-500 left-4 bottom-0 md:top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full `}
        >
          <div id="arrow_2" className={`arrow-wrapper  relative `}>
            <div className="arrow arrow--left flex items-center justify-center">
              <span onClick={() => setsClick("prev")} className={` me-2 mt-2`}>
                Prev
              </span>
            </div>
          </div>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 bottom-0 md:top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full"
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
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-black" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
