import React, { useCallback, useEffect, useState } from "react";
import second from "../assets/notch.svg";
import first from "../assets/941.svg";
import third from "../assets/right-side.svg";
import arrowleft from "../assets/detail/arrow-left.svg";
import heart from "../assets/detail/heart.png";
import clock from "../assets/detail/clock.svg";
import message from "../assets/detail/messages-3.svg";
import start from "../assets/detail/star.png";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import NewDesign from "../components/NewDesign";
import { noBgMenu } from "../../utils/data";
import cart from "../assets/cart.gif";
import { addMessage } from "../../store/slice/Message";
import { addItems } from "../../store/slice/Items";
import APi from "../Api/Api";
import { useSocket } from "../../context/SocketProvider";
const FoodDetail = () => {
  const socket = useSocket()
  const dispatch = useDispatch();
  const [fetch, setfetch] = useState(false);
  const [like, setlike] = useState(false);
  const [count, setCount] = useState(1);
  const [items, setitems] = useState(0);
  const DetailItem = useSelector((state) => state.detailItem.item);
  const tableNo = useSelector((state) => state.table.table);
  const naviagation = useNavigate();

  useEffect(() => {
    const itemListOfTable = async () => {
      const response = await APi.post("/itemlist", {
        tableNo,
      });
      const lenghtOfitem = response?.data?.items?.length;
      setitems(lenghtOfitem);
    };
    itemListOfTable();
  }, [fetch]);


  if (count < 1) {
    setCount(1);
  }

  useEffect(()=>{
      socket.emit('new:table','heloo')
      return () => socket.emit('new:table')
  },[fetch])

  const savingOnCart = useCallback(async () => {
    try {
      const response = await APi.post("/item", {
        name: DetailItem.name,
        item: JSON.stringify(DetailItem),
        quantity: count,
        price: DetailItem.price,
        tableNo: tableNo,
      });
      if (response.data === "exists") {
        dispatch(addItems(response.data));
        dispatch(addMessage("Item already exists"));
      } else {
        dispatch(addMessage("Successfully added to the receipt"));
        setfetch((prev) => !prev);
        // Emit the socket event here
      }
    } catch (error) {
      if (error.response.status === 400) {
        console.log(error.response.data.message);
        dispatch(addMessage(error.response.data.message));
      }
    }
  }, []);
  

  return (
    <>
      <div className="relative rounded-13xl bg-tint-1 w-full h-[100vh] text-left text-[1rem] text-shade-4 font-label-l1" style={{background:"linear-gradient(#ececec,#e8e8e8,#eeeeee,#f2f2f2)"}}>
        <div className="absolute h-[4.03%] w-full top-[95.97%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute top-[calc(50%_-_2px)] left-[calc(50%_-_60px)] rounded-[100px] bg-shade-4 w-[7.5rem] h-[0.25rem]" />
        </div>
        <div className="absolute h-[5.13%] w-full top-[0%] right-[0%] bottom-[94.87%] left-[0%] overflow-hidden flex flex-row items-center justify-between py-[1rem] px-[1.25rem] box-border">
          <div className="flex flex-col items-center justify-start">
            <img
              className="pizza relative w-[1.78rem] h-[0.69rem]"
              alt=""
              src={first}
            />
          </div>
          <img
            className="relative w-[13.69rem] h-[1.88rem] hidden"
            alt=""
            src={second}
          />
          <img
            className="relative w-[4.17rem] h-[0.71rem]"
            alt=""
            src={third}
          />
        </div>
        <div className="absolute top-[3.25rem] left-[1.25rem] w-[21.88rem] flex flex-row items-center justify-between text-[1.25rem]">
          <div className="rounded-3xl box-border w-[2.75rem] h-[2.75rem] flex flex-row items-center justify-start p-[0.63rem] border-[1px] border-solid border-tint-3">
            <img
              className="relative w-[1.5rem] h-[1.5rem] cursor-pointer"
              onClick={() => naviagation("/")}
              alt=""
              src={arrowleft}
            />
          </div>
          <div className="relative" onClick={() => naviagation("/cart")}>
            <img src={cart} alt="" className="" />
            <p className="bg-black absolute -top-2 left-5 opacity-50 w-[2rem] rounded-full h-[2rem] text-white text-center">
              {items}
            </p>
          </div>
        </div>
        <div
          className={`${
            like ? "bg-red-800" : ""
          } z-10 rounded-3xl absolute top-[20rem] right-28  box-border w-[2.75rem] h-[2.75rem] flex flex-row items-center justify-start p-[0.63rem] border-[1px] border-solid border-tint-3 `}
          style={{ transition: "ease-in-out  0.5s" }}
        >
          <img
            className={`relative w-[1.5rem] h-[1.5rem] cursor-pointer`}
            onClick={() => setlike((prev) => !prev)}
            alt=""
            src={heart}
          />
        </div>
        <div
          className="absolute top-[7rem] left-[1.25rem] rounded-2xl bg-tint-2 w-[21.88rem] h-[18.5rem] overflow-hidden"
          style={{ background: "#f0ece9" }}
        >
          <img
            className="absolute top-[calc(50%_-_108px)] left-[calc(50%_-_129px)] w-[16.13rem] h-[13.5rem] object-cover"
            alt={`${DetailItem ? "" : "Not Selected image"}`}
            src={DetailItem && DetailItem.image}
          />
        </div>

        <div className="absolute top-[26rem] left-[1.25rem] flex flex-col items-start justify-start gap-[2rem] text-shade-1">
          <div
            className="rounded-xl bg-tint-2 w-[21.88rem] flex flex-row items-start justify-start py-[0.75rem] px-[1rem] box-border gap-[2.13rem]"
            style={{ background: "#f0fce9" }}
          >
            <div className="flex flex-col items-center justify-start gap-[0.5rem]">
              <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                <img
                  className="relative w-[1.25rem] h-[1.25rem]"
                  alt=""
                  src={clock}
                />
                <div className="relative tracking-[0.01em]">15mins</div>
              </div>
              <div className="relative text-[0.88rem] tracking-[0.01em] text-tint-10">
                Delivery
              </div>
            </div>
            <div className="relative box-border w-[0.06rem] h-[3.13rem] border-r-[1px] border-solid border-tint-3" />
            <div className="flex flex-col items-center justify-start gap-[0.5rem]">
              <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                <img
                  className="relative w-[1.25rem] h-[1.25rem]"
                  alt=""
                  src={message}
                />
                <div className="relative tracking-[0.01em]">32+</div>
              </div>
              <div className="relative text-[0.88rem] tracking-[0.01em] text-tint-10">
                Review
              </div>
            </div>
            <div className="relative box-border w-[0.06rem] h-[3.13rem] border-r-[1px] border-solid border-tint-3" />
            <div className="flex flex-col items-center justify-start gap-[0.5rem]">
              <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                <img
                  className="relative w-[1.25rem] h-[1.25rem]"
                  alt=""
                  src={start}
                />
                <div className="relative tracking-[0.01em]">4.2</div>
              </div>
              <div className="relative text-[0.88rem] tracking-[0.01em] text-tint-10">
                Ratings
              </div>
            </div>
          </div>
          <div className="w-[21.88rem] flex flex-row items-center justify-between text-[1.5rem]">
            {/* some detail with description */}
            <div className="flex gap-5 items-center">
              <p>{DetailItem && DetailItem.name}</p>
              <p className="text-[14px]">⭐⭐⭐⭐⭐</p>
            </div>
          </div>
          <div className="absolute top-[9rem] flex justify-between w-full pr-14">
            <p className=" text-black font-medium text-xl">
              &#8377; {DetailItem && DetailItem.price}
            </p>
            <div className="bg-red-500 flex justify-between px-2 text-white rounded-md border-spacing-1 ">
              <p
                className="font-bold text-xl border-r-2 px-2"
                onClick={() => setCount((prev) => prev - 1)}
              >
                -
              </p>
              <p className="font-bold text-xl border-r-2 px-2">{count}</p>
              <p
                className="font-bold text-xl px-1"
                onClick={() => setCount((prev) => prev + 1)}
              >
                +
              </p>
            </div>
          </div>
          <div>
            <p className="text-xl font-medium mt-5">Description</p>
            <p className="font-normal pr-14">
              {DetailItem && DetailItem.description}
            </p>
          </div>
          <div className="rounded-md w-full">
            <h2 className="p-1 px-5 text-xl font-medium text-black">
              Recommended
            </h2>
            <div className="grid grid-cols-2 px-5 gap-5 w-full" style={{background:"linear-gradient(#ececec,#e8e8e8,#eeeeee,#f2f2f2)"}}>
              {noBgMenu.map((item, index) => (
                <div key={index}>
                  <NewDesign item={item} color={item.color} />
                </div>
              ))}
            </div>
          </div>
          <div
            className="w-full sticky bottom-0 h-full rounded-lg p-2"
            style={{ background: "#9EDDFF" }}
          >
            <div className="flex justify-between px-5 p-2 text-xl">
              <p>Total Amount</p>
              <p>&#8377; {DetailItem && DetailItem.price * count}</p>
            </div>
            <button
              className="w-full text-xl font-semibold text-white rounded-lg p-2"
              style={{ background: "#78C4A4" }}
              onClick={savingOnCart}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodDetail;
