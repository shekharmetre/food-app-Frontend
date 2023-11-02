import React from 'react'
import twentythree from "../assets/home.svg";
import twentyfour from "../assets/heart1.svg";
import twentyfive from "../assets/bag21.svg";
import twentysix from "../assets/profilecircle.svg";
const Bottom = () => {
  return (
	<div
        className="absolute bottom-0 left-[calc(50%_-_175px)] rounded-[40px] bg-shade-4 w-[21.88rem] flex flex-row items-baseline justify-between py-[1.38rem] px-[2rem] box-border"
        style={{ background: "#191817" }}
      >
        <img
          className="relative w-[1.75rem] h-[1.75rem]"
          alt=""
          src={twentythree}
        />
        <img
          className="relative w-[1.75rem] h-[1.75rem]"
          alt=""
          src={twentyfour}
        />
        <img
          className="relative w-[1.75rem] h-[1.75rem]"
          alt=""
          src={twentyfive}
        />
        <img
          className="relative w-[1.75rem] h-[1.75rem]"
          alt=""
          src={twentysix}
        />
      </div>
  )
}

export default Bottom