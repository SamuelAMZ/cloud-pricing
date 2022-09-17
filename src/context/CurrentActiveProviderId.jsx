import { createContext, useState } from "react";

const CurrentActiveProviderIdContext = createContext();

export const CurrentActiveProviderIdProvider = ({ children }) => {
  const [currentActiveProviderId, setCurrentActiveProviderId] = useState(1);

  const changeCurrentActiveproviderId = (newActive) => {
    setCurrentActiveProviderId(newActive);
  };

  return (
    <CurrentActiveProviderIdContext.Provider
      value={{ currentActiveProviderId, changeCurrentActiveproviderId }}
    >
      {children}
    </CurrentActiveProviderIdContext.Provider>
  );
};

export default CurrentActiveProviderIdContext;
