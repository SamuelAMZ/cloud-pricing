import React, { useContext, useState } from "react";
import ActiveProviderContext from "../context/ActiveProvider";
import DownloadActiveContext from "../context/DownloadIsActive";
import { HiDownload } from "react-icons/hi";
import { useEffect } from "react";

const SideHeader = () => {
  const { active } = useContext(ActiveProviderContext);
  const { downloadActive, changeDownloadActive } = useContext(
    DownloadActiveContext
  );
  const [lastU, setLastU] = useState(null);

  // last update
  useEffect(() => {
    if (localStorage.getItem("lastU"))
      setLastU(JSON.parse(localStorage.getItem("lastU")));
  }, [active]);

  return (
    <div className="side-header">
      <div className="title">
        <h2>{active.full}</h2>
        <div className="underline">
          <span></span>
          <span></span>
        </div>
        <p>Last Update {!lastU ? "loading date..." : lastU}</p>
      </div>
      <div className="actions">
        <div
          className="download"
          onClick={() => {
            changeDownloadActive(true);
          }}
        >
          <HiDownload />
        </div>
      </div>
    </div>
  );
};

export default SideHeader;
