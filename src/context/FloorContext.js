import React, { createContext, useEffect, useState } from "react";
import { productData } from "../data";
export const FloorContext = createContext();

const FloorProvider = ({ children }) => {
  const [products , setProducts] = useState(productData)
  return (
  <FloorContext.Provider value={{products}}>
    {children}
    </FloorContext.Provider>
    )
};

export default FloorProvider;
