import React from 'react'

const Cta = ({data}) => {
  return (
    <section  className='py-[30px] sm:py-[50px] lg:py-[60px]'>
        <div data-aos="fade-up" className="container">
            <div className='cta-border p-[30px] xl:p-[50px] border-[3px]  '>
                <h1 className='text-customPurple text-center mb-10 text-[22px] sm:text-[24px] lg:text-[28px] xl:text-[30px] leading-[1.38] tracking-[0.3px] font-normal '>{data.heading}</h1>
            <button className=' mx-auto block '>{data.button}</button>
            </div>
            
        </div>
    </section>
  )
}

export default Cta