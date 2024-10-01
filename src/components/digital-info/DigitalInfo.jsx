// import React from 'react'
import { useState } from 'react'
import DigitalCard from './DigitalCard'
import {digitalInfo} from "./data"

const DigitalInfo = () => {
  const  [currentSlide, setCurrentSlide] = useState(0);

  const handleRightClick = ()=>{
    (currentSlide === digitalInfo.length - 1 ) ? setCurrentSlide( 0 ) : setCurrentSlide( currentSlide + 1 );
  }
  const handleLeftClick = ()=>{
    (currentSlide === 0 ) ? setCurrentSlide( digitalInfo.length - 1 ) : setCurrentSlide( currentSlide - 1 );
  }
  return (
    <section data-aos="fade-up"  className='bg-customPurple text-white pt-10 pb-[105px] sm:pt-[60px] sm:pb-[115px] lg:pt-20 lg:pb-[100px] 2xl:pb-[110px]'>
        <div  className="container">
            <div className=' sm:flex justify-between mb-[60px] lg:mb-[80px]'>
                <h1 data-aos="fade-up" className='text-[26px] sm:text-[28px] lg:text-[30px] xl:text-[36px] 2xl:text-[42px] leading-tight font-light sm:w-[52%] lg:w-[46%]'>Crafting Intelligent Software Solutions for a Strong Digital Presence</h1>
                <p data-aos="fade-up" className='text-[18px] leading-[1.4] tracking-[0.3px] sm:w-[42%] my-[18px]'>We assist enterprises by transforming unstructured data into actionable insights and facilitating automation to enhance efficiency, productivity, and growth. </p>
            </div>
            {
              digitalInfo &&
              digitalInfo.map(item => currentSlide === item.id && <DigitalCard key={item.id} item={item}/>)
            }
            
            <div className='space-x-4 lg:float-right mt-[30px]'>
              <button onClick={handleLeftClick} className='btn-digital after:rotate-180'></button>
              <button onClick={handleRightClick} className='btn-digital'></button>
            </div>
        </div>
    </section>
  )
}

export default DigitalInfo;