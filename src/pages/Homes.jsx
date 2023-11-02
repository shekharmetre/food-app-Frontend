import React, { useCallback, useEffect, useState,Suspense } from "react";
import fourth from "../assets/element3.svg";
import fifth from "../assets/locationtick.svg";
import sixth from "../assets/arrowdown.svg";
import seventh from "../assets/notification.svg";
import eight from "../assets/searchnormal.svg";
import {
  Offers,
  foodCategories,
  bestselling,
  indianRestaurantMenu,
  indianBreadMenu,
  coldDrinkMenu,
} from "../../utils/data";
const BestSelling = React.lazy(()=>import("../components/BestSelling"))
const Menu = React.lazy(()=>import("./Menu"))
import { useDispatch, useSelector } from "react-redux";
import  { detailItem } from "../../store/slice/DetailItem";
import { useNavigate, useLocation } from "react-router-dom";
const Category = React.lazy(()=>import('../components/Category'))
import { addTable } from "../../store/slice/Table";
import { useSocket } from "../../context/SocketProvider";
import Api from "../Api/Api";
const Homes = () => {
  const [data,setData] =useState(null)
  const location = useLocation();
  const [searchValue, setSearch] = useState("");
  const navigation = useNavigate();
  const dispatch = useDispatch()
  const [color, setcolor] = useState(0);
  const paramstable = location.pathname.split("/")[2];
 const socket =  useSocket()
  useEffect(() => {
    if (paramstable) {
      dispatch(addTable(paramstable));
    }
  }, [paramstable]);



  const sendingDetailPage = useCallback((data) => {
    dispatch(detailItem(data));
    navigation("/detail");
  }, [dispatch, navigation]);


  useEffect(()=>{
    socket.emit("new:table",paramstable)
    return () => {
      socket.off('new:table')
    };
  },[paramstable,socket])

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="p-3 flex flex-row items-center justify-between text-tint-8 bg-transparent">
          <div className="rounded-3xl flex flex-row items-center justify-start p-[0.63rem] border-[1px] border-solid border-tint-3">
            <img
              className="relative w-[1.5rem] h-[1.5rem]"
              alt=""
              src={fourth}
            />
          </div>
          <div className="flex flex-col items-center justify-start gap-[0.25rem]">
            <div className="flex flex-row items-start justify-center gap-[0.25rem]">
              <img
                className="relative w-[1.25rem] h-[1.25rem]"
                alt=""
                src={fifth}
              />
              <div className="relative font-semibold">Amanthrana Hotel</div>
            </div>
            <div className="flex flex-row items-center justify-center gap-[0.25rem] text-shade-4">
              <div className="relative tracking-[0.01em]">Bidar</div>
              <img className="relative w-[1rem] h-[1rem]" alt="" src={sixth} />
            </div>
          </div>
          <div className="rounded-3xl flex flex-row items-center justify-start p-[0.63rem] border-[1px] border-solid border-tint-3" onClick={()=>navigation('/admin')}>
            <img
              className="relative w-[1.5rem] h-[1.5rem]"
              alt=""
              src={seventh}
            />
          </div>
        </div>
        {/* abover are headeres */}
        <div className="p-3">
          <div className="flex gap-5 overflow-x-scroll">
            {Offers.map((item, index) => (
              <div
                className="relative rounded-2xl bg-primary w-[21.88rem] h-[11rem] overflow-hidden shrink-0"
                key={index}
                style={{ background: "#EBD1B9" }}
              >
                <div className="absolute top-[calc(50%_-_72px)] left-[1rem] flex flex-col items-start justify-start gap-[1.5rem]">
                  <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                    <div className="relative leading-[1.75rem] font-semibold">
                      {item.title}
                    </div>
                    <div className="relative text-[1rem] font-medium inline-block w-[13.25rem]">
                      {item.info}
                    </div>
                  </div>
                  <div
                    className="rounded-3xl bg-accent flex flex-row items-center justify-center py-[0.75rem] px-[0.88rem] text-[1.06rem] text-tint-1"
                    style={{ background: "#78c4a4" }}
                  >
                    <div className="relative tracking-[0.01em] leading-[1.25rem] font-semibold">
                      Claim Voucher
                    </div>
                  </div>
                </div>
                <img
                  className="absolute h-[75.29%] w-[50.45%] top-[35.15%] right-[-10.98%] bottom-[-10.45%] left-[60.53%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src={item.Image}
                />
              </div>
            ))}
          </div>
        </div>
        {/* abover are offers section */}
        <div className="mx-3 h-[5.69%] rounded-3xl box-border  w-[21.88rem] flex flex-row items-end justify-start py-[0.75rem] md:w-full px-3 gap-[0.75rem] text-tint-7 border-[0.5px] border-solid border-tint-5">
          <img className="relative w-[1.5rem] h-[1.5rem]" alt="" src={eight} />
          <input
            type="text"
            placeholder="What will you like to eat?"
            className="relative tracking-[0.01em] outline-none"
            value={searchValue}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {/* above are search section */}
        <div className="flex flex-row items-start justify-start gap-[1.25rem] text-tint-9 overflow-x-scroll sticky opacity-80 top-1 bg-white shadow-sm shadow-blue-700 px-5 p-2">
          {foodCategories.map((category, index) => (
            <div onClick={() => setcolor(index)} key={index}>
              <Suspense fallback={<div>Content is Loading...</div>}>
              <Category category={category} color={color} index={index} />
              </Suspense>
            </div>
          ))}
        </div>
        {/*  */}
        <div className="mt-2">
          <div className="flex justify-between px-5">
            <h2 className="text-md font-bold mb-2">Recommended</h2>
            <p>View all</p>
          </div>
          <div className="flex overflow-scroll py-2">
            {bestselling.map((item, index) => (
              <div className="" key={index}>
                <Suspense fallback={<div>COntent is Loading</div>}>
                <BestSelling
                  image={item.image}
                  description={item.description.slice(0, 40) + "..."}
                  title={item.title}
                  price={item.price}
                  rating={item.ratings}
                />
                </Suspense>
              </div>
            ))}
          </div>
        </div>
        {/*  */}
        <div className="">
          <div>
            <div className="flex justify-between mb-5 px-5">
              <h2 className="font-bold">Menu List</h2>
              <p>View all</p>
            </div>
            <div className="grid grid-cols-2 gap-3 px-3 md:grid-cols-7">
              {indianRestaurantMenu.map((item, index) => (
                <div key={index} onClick={() => sendingDetailPage(item)}>
                  <Suspense fallback={<div>Menu is Loading....</div>}>
                  <Menu
                    title={item.name}
                    price={item.price}
                    description={item.title}
                    image={item.image}
                  />
                  </Suspense>
                </div>
              ))}
            </div>
          </div>
          {/*  a ove are indian Restaurant menu*/}/
          <div className="px-3">
            <h2 className="flex justify-between mb-5 font-bold">
              Bread Menu<span>View all</span>
            </h2>
            <div className="flex p-2 gap-5  md:gap-14 overflow-x-scroll">
              {indianBreadMenu.map((item, index) => (
                <div key={index} onClick={() => sendingDetailPage(item)}>
                  <Menu
                    image={item.image}
                    title={item.name}
                    description={item.description.slice(0, 45)}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* aover are indiam bread menu */}
          <div>
            <div className="flex justify-between mb-5 px-5">
              <h2 className="font-bold">Amanthrana Cool drinks</h2>
              <p>View all</p>
            </div>
            <div className="grid grid-cols-2 gap-3 px-4">
              {coldDrinkMenu.map((item, index) => (
                <div onClick={() => sendingDetailPage(item)} key={index}>
                  <Menu
                    title={item.name}
                    price={item.price}
                    description={item.title}
                    image={item.image}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* above are indian coldrinks menu */}
        </div>
      </div>
    </>
  );
};

export default Homes;
