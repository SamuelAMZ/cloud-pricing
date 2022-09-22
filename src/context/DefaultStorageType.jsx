import { createContext, useState } from "react";

const DefaultStorageContext = createContext();

export const DefaultStorageProvider = ({ children }) => {
  const [defaultStorage, setDefaultStorage] = useState("block");

  const changeDefaultStorage = (newActive) => {
    setDefaultStorage(newActive);
  };

  return (
    <DefaultStorageContext.Provider
      value={{ defaultStorage, changeDefaultStorage }}
    >
      {children}
    </DefaultStorageContext.Provider>
  );
};

export default DefaultStorageContext;
