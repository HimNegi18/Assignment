import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <section className="bg-[#e8e8ee] text-customPurple py-[50px] sm:py-[60px] lg:pt-[70px] lg:pb-[50px] 2xl:pt-[90px] 2xl:pb-[85px]">
      <div className="container">
        <div className="relative blog-heading sm:flex justify-between pb-[35px] mb-[40px] border-b border-[#767899] lg:pb-[40px] lg:mb-[50px] 2xl:mb-[68px]">
          <h1 className="text-[26px] sm:text-[20px] md:text-[30px] lg:text-[32px] 2xl:text-[48px] font-light mb-[15px] sm:mb-0 sm:w-[45%] sm:tracking-[-.3px] 2xl:leading-tight">Top Insights</h1>
          <p className="text-[18px] font-medium leading-[3.2] sm:w-[52%] lg:pr-[20px] xl:w-[42%] 2xl:w-[40.2%] 2xl:text-[20px] 2xl:leading-[28px] 2xl:pt-[5px] my-[18px]">
            Explore our latest blogs – a blend of curated content, and trends.
            Stay informed, and inspired!
          </p>
        </div>
        <div data-aos="fade-up" className="md:grid md:grid-cols-3 md:gap-6">
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
        </div>
      </div>
    </section>
  );
};

export default Blog;
