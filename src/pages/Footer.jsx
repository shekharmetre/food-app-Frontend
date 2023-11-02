import React from "react";

const Footer = () => {
  return (
    <div className="w-[375px] h-[67px] relative">
      <div className="w-[375px] h-[67px] left-0 top-0 absolute bg-white shadow" />
      <div className="w-[286px] h-[38px] left-[45px] top-[15px] absolute justify-start items-end gap-[50px] inline-flex">
        <div className="w-[29px] h-9 relative">
          <div className="left-0 top-[25px] absolute text-center text-indigo-600 text-[9px] font-extrabold font-['Mulish'] uppercase tracking-wide">
            Home
          </div>
        </div>
        <div className="relative">
          <div className="left-0 top-[27px] absolute text-center text-neutral-800 text-[9px] font-extrabold font-['Mulish'] uppercase tracking-wide">
            Order
          </div>
          <div className="w-6 h-6 left-[5px] top-0 absolute flex-col justify-start items-start inline-flex" />
        </div>
        <div className="flex-col justify-center items-center gap-[5px] inline-flex">
          <img className="w-5 h-5" src="https://via.placeholder.com/20x20" />
          <div className="text-center text-neutral-800 text-[9px] font-extrabold font-['Mulish'] uppercase tracking-wide">
            Indox
          </div>
        </div>
        <div className="flex-col justify-center items-center gap-[5px] inline-flex">
          <img className="w-4 h-5" src="https://via.placeholder.com/16x20" />
          <div className="text-center text-neutral-800 text-[9px] font-extrabold font-['Mulish'] uppercase tracking-wide">
            Profile
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
