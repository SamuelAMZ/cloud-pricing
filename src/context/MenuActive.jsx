import { createContext, useState } from "react";

const MenuActiveContext = createContext();

export const MenuActiveProvider = ({ children }) => {
  const [MenuActive, setMenuActive] = useState(false);

  const changeMenuActive = (newActive) => {
    setMenuActive(newActive);
  };

  return (
    <MenuActiveContext.Provider value={{ MenuActive, changeMenuActive }}>
      {children}
    </MenuActiveContext.Provider>
  );
};

export default MenuActiveContext;
