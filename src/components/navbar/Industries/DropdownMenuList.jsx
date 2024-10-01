import React from 'react'

const DropdownMenuList = ({item}) => {
  return (
    <li className=' px-4 pt-3 pb-5 hover:bg-[#F3F3F3] hover:rounded-lg list-hover'>
        <span className='font-normal text-black lg:text-[#101827] lg:text-[17px]'>{item.label}</span>
        <p className=' text-[15px] font-normal mt-[8px] lg:text-[15px] leading-[1.43] lg:mt-1 lg:mb-2'>{item.description}</p>
    </li>
  )
}

export default DropdownMenuList