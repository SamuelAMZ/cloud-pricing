import { createContext, useState } from "react";

const DownloadActiveContext = createContext();

export const DownloadActiveProvider = ({ children }) => {
  const [downloadActive, setDownloadActive] = useState(false);

  const changeDownloadActive = (newActive) => {
    setDownloadActive(newActive);
  };

  return (
    <DownloadActiveContext.Provider
      value={{ downloadActive, changeDownloadActive }}
    >
      {children}
    </DownloadActiveContext.Provider>
  );
};

export default DownloadActiveContext;
