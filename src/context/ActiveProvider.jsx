import { createContext, useState } from "react";

const ActiveProviderContext = createContext();

export const ActiveProvider = ({ children }) => {
  const [active, setActive] = useState({
    name: "linode",
    full: "Linode",
    id: 1,
    color: "linear-gradient(to right, #8e2de2, #4a00e0)",
    url: "https://cloud-pricing-362106.ue.r.appspot.com/api/v1/linode",
    storage: ["block", "object"],
    pricePerMo: {
      compute: true,
      database: true,
      storage: true,
    },
    pricePerHo: {
      compute: true,
      database: false,
      storage: false,
    },
  });

  const changeActive = (newActive) => {
    setActive(newActive);
  };

  return (
    <ActiveProviderContext.Provider value={{ active, changeActive }}>
      {children}
    </ActiveProviderContext.Provider>
  );
};

export default ActiveProviderContext;
