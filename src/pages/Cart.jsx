import React, { useCallback, useEffect, useState } from "react";
import arrowleft from "../assets/detail/arrow-left.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { addMessage } from "../../store/slice/Message";
import Api from "../Api/Api";
import { useSocket } from "../../context/SocketProvider";
const Cart = ({ title, price, description }) => {
  const navigation = useNavigate();
  const socket = useSocket()
  const [userName, setuserName] = useState("User Name");
  const tableNo = useSelector((state) => state.table.table);
  const [itemdata, setItemdata] = useState([]);
  const dispatch = useDispatch()
const totalprice = itemdata?.map(item=>item?.price*item?.quantity)
const totalSum = totalprice?.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
  useEffect(() => {
    const fetchingAllData = async () => {
      const response = await Api.post("/itemlist", {
        tableNo,
      });
      setItemdata(response?.data?.items);
    };
    fetchingAllData();
  });


  const orderSuccessfully = async () => {
    try {
      const data = await Api.post('/success', { tableNo });
      dispatch(addMessage('Order successful'));
      // Emit the socket event here
      socket.emit('new:table', 'success');
      navigation('/success');
    } catch (error) {
      dispatch(addMessage(error));
    }
  };

  return (
    <>
      <div className="w-full h-[100vh]">
        <div className="flex justify-between items-center px-5 mt-5">
          <div className="rounded-3xl box-border w-[2.75rem] h-[2.75rem] flex flex-row items-center justify-start p-[0.63rem] border-[1px] border-solid border-tint-3">
            <img
              className="relative w-[1.5rem] h-[1.5rem] cursor-pointer"
              onClick={() => navigation("/")}
              alt=""
              src={arrowleft}
            />
          </div>
          <p className="text-blue-800 font-bold leading-5">Table No. {tableNo}</p>
          <p>{userName}</p>
        </div>
        <div className="px-5 mt-2 backdrop-blur-sm">
          <h2 className="text-xl font-semibold">
            Welcome to Anathrana Hotel/Restaurant
          </h2>
          <p className="text-xl font-semibold">
            Good Day with Amanthrana &#128578; &#128578; &#128578;
          </p>
        </div>
        <div className="flex flex-col gap-5 mt-2 p-5 h-[16rem] overflow-y-scroll">
          {itemdata &&
            itemdata.map((item, index) => {
              const safd = JSON.parse(item.item);
              return (
                <div key={index}>
                  <CartItem safd={safd} ItemSetId={item?._id} qty={item.quantity} />
                </div>
              );
            })}
        </div>

        <div className="px-5 mt-7 flex justify-between">
          <p className="text-xl opacity-80 font-sans">Price</p>
          <p className="text-orange-500 font-bold text-md">&#8377; {totalSum}</p>
        </div>
        <div className="px-5 flex justify-between -z-10">
          <p className="text-xl opacity-80 font-sans">Coupon Code</p>
          <p className="text-orange-500 mt-2 font-bold text-md">not available</p>
        </div>
        <div className="sticky -bottom-0 z-50 shadow-sm shadow-black px-5 p-2 w-full backdrop-blur-md">
          <div className="flex justify-between">
            <p className="font-bold opacity-80">Total Amount</p>
            <p>&#8377; {totalSum}</p>
          </div>
          <button className="bg-orange-600 w-full mt-1 rounded-md p-2 text-white font-medium" onClick={orderSuccessfully}>
            Click To Order
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
