import React from "react";
 
const CertificateCard = ({ image, name, description }) => {
  return (
    <div className="shadow-sm shadow-black/20 rounded-2xl p-4 w-full flex flex-col">
      <img
        className="h-40 sm:h-48 w-full object-contain p-2"
        src={image}
        alt={name}
      />
      <label htmlFor="Certimage" className="font-medium text-sm sm:text-base mt-1">
        {name}
      </label>
      <div className="text-xs sm:text-sm text-gray-500 mt-1">{description}</div>
    </div>
  );
};
 
export default CertificateCard;
 