import { createContext, useState } from "react";

const DefaultCompContext = createContext();

export const DefaultCompProvider = ({ children }) => {
  const [defaultComp, setDefaultComp] = useState("general");

  const changeDefaultComp = (newActive) => {
    setDefaultComp(newActive);
  };

  return (
    <DefaultCompContext.Provider value={{ defaultComp, changeDefaultComp }}>
      {children}
    </DefaultCompContext.Provider>
  );
};

export default DefaultCompContext;
