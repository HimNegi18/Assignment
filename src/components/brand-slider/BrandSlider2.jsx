import React from 'react'
import Marquee from "react-fast-marquee";
import BrandLogo from "./BrandLogo";
import { brandLogo2 } from "./data";

const BrandSlider2 = () => {
  return (
    <section className="py-10 lg:py-[54px] bg-white">
      <Marquee pauseOnHover={true} speed={140}>
      <div className="flex gap-10 sm:gap-[150px]">
          {brandLogo2 &&
            brandLogo2.map((item, index) => (
              <img
                key={index}
                src={item}
                alt="Logo"
                className="w-60 h-[85px] first:ml-[150px] invert "
              />
            ))}
        </div>
      </Marquee>
    </section>
  )
}

export default BrandSlider2