import React from "react";

const NewDesign = ({ item, color }) => {
  return (
    <div className="w-[145.26px] h-[206px] relative">
      <div className="w-[145.26px] h-[178.27px] left-0 top-[27.73px] absolute bg-white rounded-[30px] shadow" />
      <div className="w-[100px] h-[34.33px] left-[20px] top-[128.01px] absolute opacity-90 text-center text-black text-[12px] font-semibold font-['SF Pro Rounded'] leading-snug">
        {item.title}
      </div>
      <div className="w-[113.56px] h-[12.54px] left-[15.85px] top-[173.65px] absolute text-center text-amber-400 text-[17px] font-bold font-['SF Pro Rounded']">
        N1 {item.price}
      </div>
      <img
        className="w-[110.92px] h-[110.79px] left-[17.17px] top-0 absolute rounded-[20px] object-cover"
        src={item?.image}
      />
    </div>
  );
};

export default NewDesign;
