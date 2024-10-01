import React from 'react'
import block from '../../assets/digital-solution/block.svg'
import DigitalCard from './DigitalCard'
import { digitalData, industrialData } from './data'
import IndustryBox from './IndustryBox'

const DigitalSolution = () => {
  return (
    <section className='py-[50px] lg:pt-[70px] lg:pb-[40px] 2xl:pt-[87px] 2xl:pb-[95px] bg-[#e8e8ee] text-customPurple'>
        <div className="container">
            <span className='block mb-10 lg:mb-[60px]'>
                <img src={block} alt="SVG" />
            </span>
            <div className='sm:flex justify-between mb-[50px] lg:mb-[80px]'>
                <h2 data-aos="fade-up" className='sm:w-[52%] lg:w-[48%] font-light text-[26px] lg:text-[32px] xl:text-[36px] 2xl:text-[38px] leading-[1.22] leading-[1.1] mb-[22px] sm:mb-0 tracking-[-.3px]'>
                Industry-Specific Digital Transformation Solutions to Fuel Acceleration
                </h2>
                <p data-aos="fade-up" className='text-[18px] sm:w-[42%] font-medium leading-[1.4] my-[18px]'>
                We have expertise in diverse verticals to bring valuable insights and deliver web, mobile, and custom solutions that fit their requirements perfectly.
                </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 mb-[60px] lg:mb-20 xl:mb-[110px]">
               {
                digitalData &&
                digitalData.map(item => <DigitalCard key={item.id} items={item}/> )
               }
            </div>
            <h1 className='text-[26px] font-normal leading-[1.2] mb-10 max-w-[515px] w-full tracking-[.3px] sm:text-[28px] lg:text-[30px] lg:mb-[50px] 2xl:text-[34px] uppercase'>We Also Have Expertise in These Verticals</h1>
            <div data-aos="fade-up" className=' sm:grid sm:grid-cols-2 lg:grid-cols-4' >
               {
                industrialData &&
                industrialData.map(item => <IndustryBox key={item.id} items={item}/>)
               }
            </div>
        </div>
    </section>
  )
}

export default DigitalSolution