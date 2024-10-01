// import React from 'react'

const WorkCard = ({image, label, description}) => {
  return (
    <div className="max-w-[377px] bg-[#FAFAFA] p-6 list-hover">
      <div>
        <img
          src={image}
          alt="Not found"
          className="w-full"
        />
      </div>
      <div className="pt-5">
        <span className="text-black leading-[1.43]">{label}</span>
        <p className="text-[15px] leading-[1.43] mt-1 mb-3">{description}</p>
      </div>
        
    </div>
  );
};

export default WorkCard;
