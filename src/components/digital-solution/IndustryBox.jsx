import React from 'react'

const IndustryBox = ({items}) => {
  return (
    <div  className='group sm:mx-[10px] mb-5 bg-white py-[30px] px-[15px] 2xl:py-10 2xl:px-5 lg:hover:rounded-md lg:hover:translate-y-[10px] transition-all duration-500 '>
        <h3 className='digital-heading'>{items.heading}</h3>
        <p className='text-[16px] font-medium leading-[1.4] mb-[29px] sm:min-h-[68px] lg:min-h-[112px] 2xl:px-2'>{items.content}</p>
        <div className="service-icon digital-link hover:w-[10rem] hover:h-[2.5rem] ">
            <p className="hidden text-white text-[18px] font-medium">Explore</p>
            <span></span>
        </div>
    </div>
  )
}

export default IndustryBox