import React from 'react'

const ServiceCard = ({item}) => {
  return (
    <div className='group bg-white py-[25px] px-[15px] lg:py-[35px] xl:py-[40px] xl:px-[20px] text-customPurple mb-3'>
        <div className='service-header flex justify-between items-center cursor-pointer mb-[33px]'>
            <h3 className='text-[22px] lg:text-[24px] 2xl:text-[26px] leading-[1.1] tracking-[.3px]
            font-[350]'>{item.header}<br/>{item.header2}</h3>
            <div className='service-icon group-hover:bg-customPurple'>
                <span ></span>
            </div>
        </div>
        <p className='my-4 text-[16px] leading-[1.4] font-medium'>{item.content}</p>
    </div>
  )
}

export default ServiceCard