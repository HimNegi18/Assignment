import React from 'react'
import { TbMessageCircle } from "react-icons/tb";
import { FiMail } from "react-icons/fi";

const NavFooter = () => {
  return (
    <div className='bg-[#fff5f5] lg:px-[40px] xl:px-[180px] py-[22px] flex justify-between'>
        <p>Ready to get Started?
            <a href='#' className='pl-2 text-customRed hover:underline'>Let's Talk</a>
        </p>
        <ul className='flex items-center gap-4 text-customRed'>
            <li className='flex items-center gap-2'>
              <FiMail/> <a href='#' className=' hover:underline'>abc@gmail.com</a> 
            </li>
            <li className='flex items-center gap-2'>
            <TbMessageCircle /><a href='#' className='hover:underline'>+91 1234567890</a>
            </li>
        </ul>
    </div>
  )
}

export default NavFooter;