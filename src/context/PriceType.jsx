import { createContext, useState } from "react";

const PricetypeContext = createContext();

export const PricetypeProvider = ({ children }) => {
  const [pricetype, setPricetype] = useState("permo");

  const changePricetype = (newActive) => {
    setPricetype(newActive);
  };

  return (
    <PricetypeContext.Provider value={{ pricetype, changePricetype }}>
      {children}
    </PricetypeContext.Provider>
  );
};

export default PricetypeContext;
