import React from "react";
import live from "../assets/importants/lives.svg";

const BestSelling = ({ title, description, rating, price, image }) => {
  return (
    <div className="rounded-xl bg-white shadow-black items-center shadow-md  flex mx-3 p-3 gap-2 w-[350px] h-[220px]">
      <div className="content flex flex-col gap-1">
        <div className="flex gap-3 items-center">
          <img src={live} alt="" className="w-5" />
          <p className="bg-red-600 px-2 p-[2px] text-white font-semibold rounded-md text-sm">
            Best selling
          </p>
        </div>
        <p className="font-bold font-sans mt-2">
          {title || "Super Nutrition Fruit Bowl with Dry Fruits"}
        </p>
        <p className="flex gap-2">
          ⭐⭐{" "}
          <span className="text-sm font-medium">{rating || 423} Ratings</span>{" "}
        </p>
        <p className="font-bold">
          &#8377; <span className="font-semibold">{price || 456}</span>
        </p>
        <p className="max-w-[200px]">
          {description ||
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, quam?"}{" "}
        </p>
      </div>
      <div className="w-48 h-28">
        <img
          src={image}
          alt=""
          className="w-full h-full rounded-md  object-cover"
        />
      </div>
    </div>
  );
};

export default BestSelling;
