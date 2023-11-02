import React, { useEffect, useState, Suspense, useCallback } from "react";

const SideBar = React.lazy(() => import("../components/admin/SideBar"));
const Docker = React.lazy(() => import("../components/admin/Docker"));
import menu from "../assets/element3.svg";
import cancel from "../assets/cancel.svg";
import eight from "../assets/searchnormal.svg";
import seventh from "../assets/notification.svg";
import clock from "../assets/detail/clock.svg";
import { useSelector } from "react-redux";
import Api from "../Api/Api";
import { Socket } from "socket.io-client";
import { useSocket } from "../../context/SocketProvider";

const Admin = () => {
  const [change, setChange] = useState(0);
  const [data, setData] = useState([]);
  const [searchValue, setSearch] = useState("");
  const [Menu, setMenu] = useState(false);
  const tableNo = useSelector((state) => state.table.table);
  const message = useSelector((state) => state.message);
  const socket = useSocket();

  const hanleChange = useCallback(async(data)=>{
    setChange((prev)=>prev + 1)
    const response = await Api.get('/admin')
    setData(response.data)
  },[socket])

  useEffect(() => {
    socket.on("user:joined", hanleChange);
    return () => {
      socket.off("user:joined", hanleChange);
    };
  }, [socket, change]);

  useEffect(()=>{
    socket.emit('new:table',"hello world")
    return () =>{
      socket.off('new:table')
    }
  },[tableNo])



  return (
    <section
      id="admin"
      style={{ background: "#f0ece9" }}
      className="w-full h-[100vh] overflow-scroll z-10"
    >
      <div className="p-3 md:flex md:justify-between">
        <div
          className={`md:block ${Menu ? "absolute" : "hidden"}`}
          style={{ transition: "ease-in-out 2s" }}
        >
          <Suspense fallback={<div>SideBar is Loading</div>}>
            <SideBar />
          </Suspense>
        </div>
        <div className="md:w-[86%] w-full ">
          {/* <AdHeader /> */}
          <div className="flex justify-between items-center bg-white p-3 md:px-10">
            <div className=" flex md:gap-10 gap-5">
              <div onClick={() => setMenu((prev) => !prev)}>
                <img
                  src={Menu ? cancel : menu}
                  alt=""
                  className={`cursor-pointer mt-2 w-5 md:w-full ${
                    Menu ? "absolute right-44 bg-white top-6" : ""
                  }`}
                />
              </div>
              <div
                className={`${
                  Menu ? "hidden" : ""
                } h-[2.7rem] rounded-3xl box-border w-[12rem] md:w-[21.88rem] flex flex-row items-end justify-start py-[0.50rem] px-[1rem] gap-[0.75rem] text-tint-7 border-[0.5px] border-solid border-tint-5`}
              >
                <img
                  className="relative w-[1.5rem] h-[1.5rem]"
                  alt=""
                  src={eight}
                />
                <input
                  type="text"
                  placeholder="Search"
                  className="relative tracking-[0.01em] outline-none "
                  value={searchValue}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            {/* bell */}
            <div className="flex md:gap-6 gap-2">
              <div className="rounded-3xl flex flex-row items-center justify-start p-[0.63rem] border-[1px] border-solid border-tint-3">
                <img
                  className="relative w-[1.5rem] h-[1.5rem]"
                  alt=""
                  src={seventh}
                />
              </div>
              {/* second */}
              <div className="rounded-3xl flex flex-row items-center justify-start p-[0.63rem] border-[1px] border-solid border-tint-3">
                <img
                  className="relative w-[1.5rem] h-[1.5rem]"
                  alt=""
                  src={clock}
                />
              </div>
            </div>
          </div>
          {/* header element */}
          <div className="md:px-5 pt-5">
            <div className="flex justify-between px-5">
              <h1 className="font-semibold text-xl">Welcome Dashboard</h1>
              <button className="bg-blue-300 p-2 rounded-md">
                + Create New Table
              </button>
            </div>
            <div className="md:flex-row flex flex-col gap-5 mt-8 p-2 overflow-scroll">
              {data?.map((item, index) => (
                <div className="" key={index}>
                  <Suspense fallback={<div>Item is Loading</div>}>
                    <Docker data={item} />
                  </Suspense>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
