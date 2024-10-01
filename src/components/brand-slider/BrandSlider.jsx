// import React from 'react'
import Marquee from "react-fast-marquee";
import BrandLogo from "./BrandLogo";
import { brandLogo1 } from "./data";

const BrandSlider = () => {
  return (
    <section className="py-10 lg:py-[54px] bg-white">
      <Marquee pauseOnHover={true} speed={140}>
        <BrandLogo brandLogo={brandLogo1}/>
      </Marquee>
    </section>
  );
};

export default BrandSlider;
