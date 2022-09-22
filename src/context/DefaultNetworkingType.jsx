import { createContext, useState } from "react";

const DefaultNetworkingContext = createContext();

export const DefaultNetworkingProvider = ({ children }) => {
  const [defaultNetworking, setDefaultNetworking] = useState("nodebalancers");

  const changeDefaultNetworking = (newActive) => {
    setDefaultNetworking(newActive);
  };

  return (
    <DefaultNetworkingContext.Provider
      value={{ defaultNetworking, changeDefaultNetworking }}
    >
      {children}
    </DefaultNetworkingContext.Provider>
  );
};

export default DefaultNetworkingContext;
