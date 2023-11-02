import React, { useEffect } from "react";
import success from "../assets/successs/success.gif";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useSocket } from "../../context/SocketProvider";
//#F0DAFE#F1DBFF #F7EDFB#F2DCFD#F2DEFB#F4E2F7,#F6E6F2,#FBF3E3,#F9EEEA,#FAF1E6
const Success = () => {
  const navigation = useNavigate();
  const table = useSelector((state) => state.table.table);
  const socket = useSocket();

  useEffect(() => {
    socket.emit("new:table", "hello origin");
    return () => socket.emit("new:table");
  }, [table]);
  return (
    <div
      className="w-full h-[100vh] px-5 grid place-content-center items-center"
      style={{
        background:
          "linear-gradient(#FAF1E6,#F9EEEA,#FBF3E3,#F6E6F2,#F4E2F7,#F2DEFB,#F2DCFD,#F7EDFB,#F1DBFF,#F0DAFE)",
      }}
    >
      <img
        src={success}
        alt=""
        className="object-cover m-auto absolute top-2 right-[35%]"
      />
      <h2 className="text-3xl font-bold leading-4 tracking-wider">
        Order Successful!
      </h2>
      <div className="bg-white mt-10 p-5 flex flex-col gap-2 rounded-md ">
        <div className="flex justify-between font-semibold">
          <p>Date</p>
          <p>Today date</p>
        </div>
        {/* second */}
        <div className="flex justify-between font-semibold">
          <p>Order number</p>
          <p>Today date</p>
        </div>
        {/* third */}
        <div className="flex justify-between font-semibold">
          <p>Total payment</p>
          <p>Today date</p>
        </div>
        <h2 className="font-semibold">
          View Details <span></span>
        </h2>
        <p className="text-sm font-medium opacity-70  text-start px-8 leading-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit{" "}
        </p>
      </div>
      <button
        className="w-[12rem] shadow-2xl outline-none mt-5 rounded-2xl p-2 text-center m-auto text-white font-semibold"
        style={{ background: "#A33F9C" }}
        onClick={() => navigation(`/home/${table}`)}
      >
        Continue Ordering
      </button>
      <p className="m-auto font-medium text-blue-600 underline mt-2" onClick={()=>navigation('/admin')}>
        Back to home
      </p>
    </div>
  );
};

export default Success;
