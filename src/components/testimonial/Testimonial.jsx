import React, { useState } from "react";
import TestimonialBox from "./TestimonialBox";
import { testimonialData } from "./data";

const Testimonial = () => {

  const [slide, setSlide] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  const onRightClick = ()=>{
    if (slideCount < testimonialData.length - 1 ) {
      setSlide( slide - 100 );
      setSlideCount(slideCount + 1);
    } 
  }
  const onLeftClick = ()=>{
    if(slideCount !== 0 ){
      setSlide( slide + 100);
      setSlideCount(slideCount - 1);
    }
  }
  return (
    <section className="py-[50px] lg:py-[65px] xl:py-20 text-customPurple bg-white">
      <div className="container">
        <div className="sm:flex sm:justify-between pl-3 mb-[50px]">
          <h1 data-aos="fade-up" className="uppercase text-[26px] lg:text-[30px] xl:text-[32px] mb-[22px] sm:mb-0 font-[350] leading-none ">
            what are client says
          </h1>
          <button data-aos="fade-up" className=" btn-purple border-customPurple text-[20px] py-[14px]">
            Explore Client Success
          </button>
        </div>
        <div data-aos="fade-up" className="md:flex justify-between">
          <div className="md:w-[55%] overflow-x-hidden">
            <div className="flex relative transition-all duration-500" style={{ left: `${slide}%` }}>
              {testimonialData &&
                testimonialData.map((item) => (
                  <TestimonialBox key={item.id} item={item} />
                ))}
            </div>
            <div className="space-x-4 mt-[10px] mb-[20px] md:mb-[10px]">
              <button onClick={onLeftClick} className={`btn-testimonial after:rotate-180 ${slideCount == 0? 'border-black opacity-50 cursor-default ' : 'border-customPurple'}`}></button>
              <button onClick={onRightClick} className={`btn-testimonial ${slideCount === testimonialData.length -1 ? 'border-black opacity-50 cursor-default ' : 'border-customPurple'}`}></button>
            </div>
          </div>
          <div className="md:w-[40%] relative pt-[50px] px-[15px] border-t-2 border-[#d1d2dd] md:border-t-0 md:border-l-2 md:pl-[30px] lg:py-0 lg:px-[55px] flex items-center">
                <div>
                  <span className="block max-w-[360px] text-[20px] italic leading-[1.03] mb-[45px]">We are our customers’ favourite which makes us a best-rated solutions provider.</span>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
