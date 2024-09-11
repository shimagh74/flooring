import React, { createContext, useEffect, useState } from "react";
import { productData } from "../data";
export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [products , setProducts] = useState(productData)
  return (
  <RoomContext.Provider value={{products}}>
    {children}
    </RoomContext.Provider>
    )
};

export default RoomProvider;
