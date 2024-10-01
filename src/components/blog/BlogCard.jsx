import React from 'react'
import folder from '../../assets/blog/folder.svg'
import file from '../../assets/blog/file.svg'

const BlogCard = () => {
  return (
    <div className='bg-white relative blog group py-[30px] px-[15px] lg:py-[44px] lg:px-[25px] xl:px-[35px] 2xl:py-[50px] 2xl:px-[45px] mb-[20px]'>
        <div className="sm:flex text-[16px] font-medium mb-[40px] 2xl:mb-[50px]">
            <span className="flex mr-8 items-center mb-3 sm:mb-0">
                <img src={folder} alt="Folder" className='mr-1' />
                September 19th,2024
            </span>
            <span className="flex items-center">
                <img src={file} alt="File" className='mr-1'/>
                12 mins
            </span>
        </div>
        <h4 className='mb-[18px] font-[350] text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px] leadimg-[1.2] tracking-[.3px] sm:min-h-[87px] xl:min-h-[108px] 2xl:min-h-[117px]'>
        Next-Gen Electric Vehicle Software Development Solutions for Sustained Mobility 
        </h4>
        <p className='text-[16px] font-medium leading-[1.3] mb-[22px] sm:mb-[35px] sm:min-h-[84px] 2xl:min-h-[63px] '>
        From the dawn of human invention, we have looked for better ways to commute, from foot travel to horse-drawn carriages...
        </p>
        <div className="service-icon digital-link hover:w-[11.5rem] hover:h-[2.6rem]  ">
            <p className="hidden text-white text-[18px] font-medium">Unlock Insights</p>
            <span></span>
        </div>
    </div>
  )
}

export default BlogCard