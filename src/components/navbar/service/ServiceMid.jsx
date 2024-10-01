// import React from "react";

const ServiceMid = ({ id, items, showServiceMid, setShowServiceMid }) => {
  return (
    <div className="min-w-[302px] pt-8 border-x bg-white ">
      <h1 className="text-sm pl-[21px] uppercase">{items.heading}</h1>
      <ul className="mt-[16px] text-[15px] leading-[1.43]">
        {items.lists &&
          items.lists.map((item, index) => (
            <li
              onMouseEnter={() => {
                setShowServiceMid(index);
              }}
              key={index}
              className={`py-3 pr-4 pl-[21px] border-b ${
                showServiceMid === index ? "text-customRed" : ""
              }`}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ServiceMid;
