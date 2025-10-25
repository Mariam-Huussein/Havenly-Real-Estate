import React, { useState } from "react";

const PropertyImages = ({ property }) => {
  const [hoverdIndex, setHoverdIndex] = useState(0);
  return (
    <div className="flex max-sm:gap-1 max-md:gap-3 gap-5 h-[400px] w-full">
      {property.images.map((image, index) => {
        const isHoverd = hoverdIndex === index;
        return (
            <div
              key={index}
              className={`relative group transition-all h-[400px] duration-500 ${isHoverd ? `flex-grow w-full` : `max-sm:w-10 max-md:w-20 w-56`}`}
              onMouseEnter={() => setHoverdIndex(index)}
              onMouseLeave={() => setHoverdIndex(0)}
            >
              <img
                className="h-full w-full object-cover object-center"
                src={image}
                alt="image"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
              </div>
            </div>
        );
      })}
    </div>
  );
};

export default PropertyImages;
