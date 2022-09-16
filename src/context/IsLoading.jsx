import { createContext, useState } from "react";

const IsLoadingContext = createContext();

export const IsLoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const changeLoading = (newActive) => {
    setIsLoading(newActive);
  };

  return (
    <IsLoadingContext.Provider value={{ isLoading, changeLoading }}>
      {children}
    </IsLoadingContext.Provider>
  );
};

export default IsLoadingContext;
