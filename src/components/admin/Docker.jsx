import React, { useMemo, useState } from "react";
import alubhat from "../../assets/homeage/alubhat.webp";
const Docker = ({ data }) => {
  const totalPrice = data?.items?.map((item) => item?.price * item?.quantity);
  const totalSum = totalPrice?.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const mongoDate = new Date(data.createdAt);
  const options = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, // Use 24-hour format
    timeZone: "Asia/Kolkata", // Set the timezone to Indian Standard Time
  };

  const indianDate = mongoDate.toLocaleString("en-IN", options).split(",");
  const dad = data && data?.items?.map((item) => JSON.parse(item?.item));
  const [waiter, setWaiter] = useState(false);
  return (
    <div className="flex flex-col gap-1 bg-white shadow-sm shadow-blue-500 p-5 rounded-2xl py-7 w-[340px]  md:w-[400px] cursor-pointer">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl">Table No . {data?.tableNo}</h2>
        <p>More</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="opacity-70 text-md font-semibold">Total</p>
        <p>
          <span className="text-xl font-bold">&#8377; {Math.ceil(totalSum,1)}</span>{" "}
          {data?.items?.price}
        </p>
      </div>
      <div className="flex justify-between items-center">
        <p className="opacity-70 text-md font-semibold">Oredered Time</p>
        <p>
          {indianDate[1]}
          ..<span className="">IST</span>
        </p>
      </div>
      <div className="w-full bg-blue-300 mt-2 rounded-md px-2">
        <button className="text-md font-medium p-1 text-black">
          {data.order === "unsuccessfull"
            ? "Send to supplier for signature"
            : "Preparing your food"}
        </button>
      </div>
      <div className="flex justify-between items-center">
        <p className="opacity-70 text-md font-semibold">Waiter </p>
        <p>{waiter ? "suresh" : "Waited to server.."}</p>
      </div>
      <div className="mt-2 flex justify-between items-center">
        <p className="opacity-70 text-md font-bold">Ordered Item</p>
        <div className="flex">
          {dad?.map((item, index) => (
            <div key={index} className="flex flex-col">
              <img
                src={item.image}
                alt=""
                className="w-[2rem] h-[2rem] object-cover rounded-full"
              />
              <p>{Math.ceil(item.price)}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row-reverse justify-between items-center mt-2">
        <p className="opacity-70 text-md font-semibold">Items left</p>
        <div className="flex ">
          <img
            src={alubhat}
            alt=""
            className="w-8 h-8 object-cover rounded-[50%]
	  "
          />
          <img
            src={alubhat}
            alt=""
            className="w-8 h-8 object-cover rounded-[50%]
	  "
          />
          <img
            src={alubhat}
            alt=""
            className="w-8 h-8 object-cover rounded-[50%]
	  "
          />
        </div>
      </div>
      <button className="border-blue-800 border-2 mt-2 rounded-md p-2 text-blue-600 font-semibold">
        View Project
      </button>
    </div>
  );
};

export default Docker;
