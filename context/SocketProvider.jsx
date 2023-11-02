import axios from "axios";
import React, { createContext, useContext, useMemo } from "react";
import { io } from "socket.io-client";

const socketContext = createContext(null);

export const useSocket = () => {
  const socket = useContext(socketContext);
  return socket;
};

export const SocketProvider = ({ children }) => {
  const socket = useMemo(
    () =>
      io(import.meta.env.VITE_BACKENDURL, {
        transports: ["websocket"],
      }),
    []
  );

  //  // productop models

  return (
    <socketContext.Provider value={socket}>{children}</socketContext.Provider>
  );
};
