import DropdownFooter from "../NavFooter";
import DropdownMenuList from "./DropdownMenuList";

// import React from 'react'
const DropdownMenu = ({data, name}) => {
  return (
    <div className="absolute hidden group-hover:block w-full left-0 mt-[17px] border-t bg-white  ">
      <div className="lg:px-[59px] 2xl:px-[186px] py-6 text-[15px] leading-[1.43]">
        <h1 className="text-sm text-[rgba(0, 0, 0, 0.5);]">{name}</h1>
        <ul className="grid grid-cols-3 gap-4 mt-3">
          {data &&
            data.map((item, index) => (
              <DropdownMenuList key={index} item={item} />
            ))}
        </ul>
      </div>
      <DropdownFooter/>
    </div>
  );
};

export default DropdownMenu;
