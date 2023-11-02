import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import APi from "../Api/Api";
import { addMessage } from "../../store/slice/Message";
import { Socket } from "socket.io-client";
import { useSocket } from "../../context/SocketProvider";
const CartItem = ({ safd ,ItemSetId,qty}) => {
  const socket = useSocket()
  const [count, setCount] = useState(qty || 1);
  const tableNo = useSelector((state) => state.table.table);
  const dispatch = useDispatch()
  useEffect(() => {
    const quantityChange = async () => {
      try {
        const response = await APi.post("/quantity", {
          tableNo: tableNo,
          itemId: ItemSetId,
          quantity: count,
        });
        dispatch(addMessage(response.data))
        console.log(response.data)
        socket.emit('new:table', "success")
      } catch (error) {
        console.log(error);
        dispatch(addMessage(error.message))
      }
    };
    quantityChange();
  }, [count]);

  useEffect(()=>{
    socket.emit('new:table',"hello")
    return () =>{
      socket.off('new:table')
    }
  },[count])

  return (
    <div className="bg-white shadow-sm shadow-black w-full h-28 rounded-lg flex gap-5 items-center p-3">
      <img
        src={safd.image}
        alt=""
        className="w-14 h-14 object-cover rounded-2xl"
      />{" "}
      {/* Use safd.image */}
      <div className="">
        <p className="text-md font-semibold">
          {safd.title || "Get two pieces"} {/* Use safd.title */}
        </p>
        <p className="text-orange-400 font-bold leading-5">
          &#8377; {safd.price || "456.00"} {/* Use safd.price */}
        </p>
        <p className="text-[12px] mt-2 opacity-60 font-medium">
          {safd.description.slice(0, 63) ||
            "Lorem ipsum dolor sit amet consectetur, adipisicing."}{" "}
          {/* Use safd.description */}
        </p>
      </div>
      <div className="flex flex-col justify-between items-center h-full">
        <p
          className="bg-orange-400 px-2 text-white font-bold text-center text-xl rounded-md"
          onClick={() => setCount((prev) => prev + 1)}
        >
          +
        </p>
        <p>{count}</p>
        <p
          className="bg-slate-400 px-3 text-white font-bold text-xl rounded-md"
          onClick={() => setCount((prev) => prev - 1)}
        >
          -
        </p>
      </div>
    </div>
  );
};

export default CartItem;
