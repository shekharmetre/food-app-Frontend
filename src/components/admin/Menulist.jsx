import React from "react";

const Menulist = ({image,name,index,clickevent}) => {

  return (
      <div className={`flex items-center gap-2 cursor-pointer p-2 ${index === clickevent ? 'rounded-r-full scale-105 shadow-white shadow-md':""}`} style={{background:index === clickevent ? 'black' : "",transition:'ease-in-out 0.6s'}}>
        <img src={image && image} alt="" className="font-bold w-8" />
        <h2 className="text-white font-semibold text-[17px]">{name && name}</h2>
      </div>
  );
};

export default Menulist;
