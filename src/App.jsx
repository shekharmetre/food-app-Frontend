import React, { useEffect, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const FoodDetail = React.lazy(() => import("./pages/FoodDetail"));
const Homes = React.lazy(() => import("./pages/Homes"));
const Cart = React.lazy(() => import("./pages/Cart"));
import { useSelector } from "react-redux";
const Admin = React.lazy(() => import("./pages/Admin"));
const Calender = React.lazy(() => import("./pages/Calender"));
import Qrgenerator from "./pages/Qrgenerator";
const Success = React.lazy(() => import("./pages/Success"));
const Footer = React.lazy(() => import("./pages/Footer"));

import APi from "./Api/Api";
import { useSocket } from "../context/SocketProvider";
const App = () => {
  const socket = useSocket()
  const message = useSelector((state) => state.message);
  const tableNo = useSelector((state) => state.table.table);
  useEffect(() => {
    if (message) {
      toast.success(message.message);
      socket.emit("message", "helo woerd");
    }
    return ()=>{
      socket.off("message")
    }
  }, [message,socket]);


  useEffect(() => {
    const creatingTable = async () => {
      if (tableNo) {
        const createingTable = await APi.post("/insert", {
          tableNo: parseInt(tableNo),
        });
        if(createingTable.data.message) {
          toast.error(createingTable.data.message);
        }else {
          toast.success(createingTable.data.message);
          socket.emit('new:table', createingTable.data.tableNo)
        }    
      }
    };
    if (tableNo) {
      creatingTable();
    }
    return ()=>{
      socket.off('new:table')
    }
  }, [tableNo]);
  return (
    <BrowserRouter>
      <div className="z-50 w-[50%]">
        <ToastContainer/>
      </div>
      <Suspense fallback={<div>page is Loading...</div>}>
        <Routes>
          <Route path="/" element={<Qrgenerator />} />
          <Route path="/home/:table" element={<Homes />} />
          <Route path="/detail" element={<FoodDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="admin/calendar" element={<Calender />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Suspense>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;

// some functionality i had to add in this project first is message whenever what do you then give you messag/notifications
