import React from "react";


const DigitalCard = ({items}) => {
  return (
    <div className="group overflow-hidden px-[10px] mb-5">
      <img
        src={items.digitalImg}
        alt="img"
        className="mx-auto mb-6 scale-[.9] hover:scale-[1] transition-all duration-500"
      />
      <h1 className="digital-heading ">{items.header}</h1>
      <div data-aos="fade-up" className="h-full">
        <div  className=" h-full bg-white py-[25px] px-[15px] 2xl:py-[30px] 2xl:px-[20px] lg:hover:-translate-y-7 transition-all duration-500">
        <p className="text-[16px] font-medium leading-normal my-4 2xl:mb-[35px]">
          {items.content}
        </p>
        <ul className="mb-[38px]">
          {
            items.lists &&
            items.lists.map((item, index) => <li key={index} className="digital-li  ">{item}</li> )
          }
        </ul>
          <div className="service-icon digital-link hover:w-[11.5rem] hover:h-[3rem] ">
            <p className="hidden text-white text-[18px] font-medium">Find Solution</p>
            <span></span>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default DigitalCard;
