import React, { useState } from "react";
import eleven from "../assets/rectangle-28@2x.png";
import heart from "../assets/detail/heart.png";

const Menu = ({ title, price, image, description }) => {
  const [like, setlike] = useState(false);
  return (
    <div className="relative  -z-10 bg-white shadow-sm shadow-black rounded-2xl h-full w-[170px] border-none mb-2">
      <div className="p-2">
        <img
          src={image || eleven}
          alt=""
          className="w-full h-28 rounded-xl object-cover shadow-2xl"
        />
        <div className="px-1 text-start flex flex-col mt-2">
          <h1 className="text-md font-bold">{title || "Mac and Cheese"} </h1>
          <p className="text-blue-800 font-bold text-xl">
            &#8377; {price || "45,000"}
          </p>
          <p className="font-bold text-[10px] w-[80%] mt-2">
          ⭐⭐⭐⭐
          </p>
        </div>
        <div
          className={`${
            like ? "bg-red-800" : ""
          } rounded-3xl box-border w-[2.75rem] h-[2.75rem] flex flex-row items-center justify-start p-[0.63rem] border-[1px] border-solid border-tint-3 absolute bottom-2 shadow-2xl right-2`}
          style={{ transition: "ease-in-out  0.5s" }}
        >
          <img
            className={`relative w-[1.5rem] h-[1.5rem] cursor-pointer object-cover`}
            onClick={() => setlike((prev) => !prev)}
            alt=""
            src={heart}
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
