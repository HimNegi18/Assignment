import React, { useState } from 'react'
import CaseStudyCard from './CaseStudyCard'
import { caseStudies } from './data';

const CaseStudies = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className='case-studies-bg relative pt-10 sm:pt-[45px] lg:pt-[60px] 2xl:pt-[75px] mb-[138px] lg:mb-[50px] xl:mb-[30px] '>
        <div className='container'>
            <h1 data-aos="fade-up" className='uppercase text-center text-white text-[26px] sm:text-[36px] lg:text-[52px] font-light leading-none mb-6 sm:mb-12 lg:mb-40px'>Case Studies</h1>
            {
                caseStudies &&
                caseStudies.map(item => currentSlide === item.id && <CaseStudyCard key={item.id} item={item} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide}/>)
            }
            
        </div>
    </section>
  )
}

export default CaseStudies