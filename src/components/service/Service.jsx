import React from 'react'
import ServiceCard from './ServiceCard'
import {serviceData} from './data'

const Service = () => {
  return (
    <section data-aos="fade-up" className=' bg-customPurple  text-white py-[60px] md:pb-[100px] lg:pt-[70px] xl:pt-[90px]'>
        <div className="container">
            <div className=' md:flex justify-between items-start'>
                <div className='md:sticky md:top-[100px] md:w-[34%] xl:w-[40%] mb-[20px] md:pt-[60px] md:mb-0'>
                    <h2 className='text-[34px] xl:text-[42px] leading-[1.15] mb-[26px] xl:mb-[42px]'>Future-Proof Your Business With Our Expert Digital Transformation Services</h2>
                    <p className='text-[17px] leading-[1.44] mb-[22px] xl:mb-[30px] xl:pr-[5px] tracking-[.5px]'>We blend intelligent tech, and expertise to create seamless digital experiences. Our agile engineering experts empower on-demand scalability across all modern platforms and devices.</p>
                    <button className='btn-purple border-white py-[12px] text-[18px]'>
                        Let's Talk
                    </button>
                </div>
                <div className=' md:w-[60%] xl:w-[55%] md:grid md:grid-cols-2  md:gap-x-[10px] '>
                    {
                        serviceData &&
                        serviceData.map(item => <ServiceCard key={item.id} item={item}/>)
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service