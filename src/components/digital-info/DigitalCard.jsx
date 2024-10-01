// import React from "react";


const digitalCard = ({item}) => {
  return (
    <div className="flex flex-wrap">
      <div className="sm:w-[53%] xl:w-[58%]">
        <img src={item.digitalImg} alt="Image" className="h-full w-full object-cover" />
      </div>
      <div className="relative sm:w-[47%] xl:w-[42%] bg-white text-customPurple px-[15px] pt-[86px] pb-[30px] sm:px-[20px] lg:px-[30px] lg:pt-[95px] lg:pb-[40px] 2xl:px-[45px] 2xl:pt-[110px] ">
      <div className="count-no absolute top-5 left-5"> {` 0${item.id + 1}`} </div>
        <h1 className="heading-1">
          {item.heading}
        </h1>
        <p className="para-1">
          {item.content}
        </p>
      </div>
    </div>
  );
};

export default digitalCard;
