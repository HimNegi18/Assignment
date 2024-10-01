import React from "react";

const TestimonialBox = ({ item }) => {
  return (
    <div className="min-w-full ">
      <div className="flex items-center mb-[35px] xl:mb-[44px]">
        <img src={item.image} alt="Image" className="rounded-full" />
        <div className="ml-5 font-bold  ">
          <h1 className="text-[17px] mb-[11px]">{item.country}</h1>
          <em className="text-[22px]">{item.position}</em>
        </div>
      </div>
      <blockquote className="italic text-[24px] lg:text-[28px] leading-[1.38] font-normal tracking-[.3px]">
        {item.content}
      </blockquote>
    </div>
  );
};

export default TestimonialBox;
