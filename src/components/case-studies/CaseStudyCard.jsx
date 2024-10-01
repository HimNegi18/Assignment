import React from "react";

const CaseStudyCard = ({ item, currentSlide, setCurrentSlide }) => {
  return (
    <div data-aos="fade-up"  className="relative">
      <div className="flex flex-wrap">
        <div className="case-study-left bg-white py-5 px-[15px] lg:pt-[55px] lg:pb-10 lg:px-10 2xl:px-[50px]">
          <div className="count-no absolute top-6 left-6">{`0${
            item.id + 1
          }`}</div>
          <h2 className="custom-head relative text-[26px] sm:text-[28px] lg:text-[30px] xl:text-[34px] 2xl:text-[36px] leading-tight font-light text-customPurple mt-[90px] mb-5 lg:mb-0 pt-[38px] border-t border-[#767899]">
            {item.heading}
          </h2>
        </div>
        <div className="case-study-right">
          <img
            src={item.brandImg}
            alt="Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="bg-white flex flex-wrap">
        <div className="case-study-left py-[26px] px-[15px] lg:pt-10 lg:px-10 lg:pb-[30px] 2xl:px-[50px] 2xl:pt-[10px]">
          <div className="mb-9 lg:mb-[77px]">
            <img src={item.brandlogo} alt="logo" />
          </div>
          <p className="text-customPurple my-[18px] xl:pr-[50px] text-[18px] leading-6 font-serif">
            {item.content}{" "}
            <a href="#" className="underline hover:no-underline">
              Know More
            </a>
          </p>
        </div>
        <div className="case-study-right flex items-center justify-between">
          <button className=" btn-purple border-customPurple py-[12px] text-[18px]">See All Case Studies</button>
          <div className="space-x-4 absolute right-0 -bottom-[100px] lg:relative lg:bottom-auto lg:right-auto">
            <button 
              onClick={() => setCurrentSlide( currentSlide === 0 ? 0 : currentSlide - 1 )}
              className=  {`btn-outline-left ${currentSlide === 0 ? 'border-black opacity-50 cursor-default ' : 'border-customPurple'} `} 
            ></button>
            <button onClick={() => setCurrentSlide( currentSlide === 2 ? 2 : currentSlide + 1)} className=  {`btn-outline-right ${currentSlide === 2 ? 'border-black opacity-50 cursor-default ' : 'border-customPurple'} `} ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
