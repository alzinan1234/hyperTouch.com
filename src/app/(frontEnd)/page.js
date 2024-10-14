import Banner from "@/Components/Front-End/Home/Banner/Banner";
import Category from "@/Components/Front-End/Home/CategorySlider/Category";
import { OurProduct } from "@/Components/Front-End/Home/Our Products/OurProduct";

import React from "react";

const HompPage = () => {
  return (
    <>
      <Banner />
      <div className="max-width mx-auto py-5">
        {" "}
        <h1 className=" text-[48px] font-[500]">Category Product</h1>
        <p>Our Best Product in Store.</p>
      </div>
      <Category />
      <OurProduct />
    </>
  );
};

export default HompPage;
