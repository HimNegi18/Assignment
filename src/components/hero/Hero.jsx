import React from "react";

const Hero = () => {
  return (
    <section className="bg-heroBanner-Mob sm:bg-heroBanner bg-cover h-[430px] sm:h-[550px] md:h-[567px] lg:h-[788px] xl:h-[832px] mt-[65px]">
      <div className="container h-full">
        <div className="flex  items-center sm:justify-end text-white h-full  ">
          <div className="max-w-[800px] sm:max-w-[500px] lg:max-w-[545px] xl:max-w-[555px] 2xl:max-w-[650px] flex flex-wrap sm:justify-end sm:text-right">
            <h1 className=" text-[36px] sm:text-[42px] md:text-[46px] lg:text-[71px] xl:text-[73px] 2xl:text-[80px] font-black lg:font-bold  uppercase w-full  break-words leading-[1] mb-10">
              Building
              <span className="text-[#fbe3a9]"> Secure </span>
              Futures With
              <span className="text-[#fbe3a9]"> Intelligent </span>
              Solutions
            </h1>
            <p
              className=" text-[20px] font-light leading-[1.26] tracking-[0.5px] my-5 sm:pl-[70px] 
            md:max-w-[500px] max-w-[515px]"
            >
              Modernizing product experiences with an analytics-driven digital
              transformation approach modeled on cognitive technologies like{" "}
              <span className="text-[#fbe3a9]"> AI, ML, </span> and DLTs like{" "}
              <span className="text-[#fbe3a9]"> Blockchain.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
