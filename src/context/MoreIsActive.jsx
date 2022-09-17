import { createContext, useState } from "react";

const MoreActiveContext = createContext();

export const MoreActiveProvider = ({ children }) => {
  const [moreActive, setMoreActive] = useState(false);

  const changeMoreActive = (newActive) => {
    setMoreActive(newActive);
  };

  return (
    <MoreActiveContext.Provider value={{ moreActive, changeMoreActive }}>
      {children}
    </MoreActiveContext.Provider>
  );
};

export default MoreActiveContext;
