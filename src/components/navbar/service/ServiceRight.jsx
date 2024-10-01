// import React from "react";

import DropdownMenuList from "../Industries/DropdownMenuList";

const ServiceRight = ({items}) => {
  return (
    <div className="w-full max-h-[486px] bg-white overflow-y-auto pt-8 pr-[10px] pb-[20px] pl-7">
      <h1 className="text-sm uppercase mb-4">{items.heading}</h1>
      <ul className="grid grid-cols-2 gap-2">
        {
            items.lists &&
            items.lists.map((item, index)=> <DropdownMenuList key={index} item={item}/>)
        }
      </ul>
    </div>
  );
};

export default ServiceRight;
