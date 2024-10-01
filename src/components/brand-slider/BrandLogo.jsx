// import React from 'react'


const BrandLogo = ({brandLogo}) => {
    
  return (
    <div className="flex gap-10 sm:gap-[100px]">
          {brandLogo &&
            brandLogo.map((item, index) => (
              <img
                key={index}
                src={item}
                alt="Logo"
                className="w-40 h-[66px] first:ml-[100px] grayscale hover:grayscale-0 "
              />
            ))}
        </div>
  )
}

export default BrandLogo