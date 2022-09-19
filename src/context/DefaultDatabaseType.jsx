import { createContext, useState } from "react";

const DefaultDatabaseContext = createContext();

export const DefaultDatabaseProvider = ({ children }) => {
  const [defaultDatabase, setDefaultDatabase] = useState("postgres");

  const changeDefaultDatabase = (newActive) => {
    setDefaultDatabase(newActive);
  };

  return (
    <DefaultDatabaseContext.Provider
      value={{ defaultDatabase, changeDefaultDatabase }}
    >
      {children}
    </DefaultDatabaseContext.Provider>
  );
};

export default DefaultDatabaseContext;
