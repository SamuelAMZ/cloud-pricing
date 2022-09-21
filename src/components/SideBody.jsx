import React, { useContext, useState, useEffect } from "react";
import Download from "./Download";
import Computer from "./products/Computer";
import Database from "./products/Database";
import useGetData from "../hooks/useGetData";
import ActiveProviderContext from "../context/ActiveProvider";
import DownloadActiveContext from "../context/DownloadIsActive";

const SideBody = () => {
  const { active } = useContext(ActiveProviderContext);
  const { downloadActive, changeDownloadActive } = useContext(
    DownloadActiveContext
  );

  const {
    currentData: providerdata,
    isError,
    isLoading,
  } = useGetData(active.url);

  // trim too long data strings
  const trimData = (targetData) => {
    if (targetData) {
      if (targetData.length >= 12) {
        return targetData.slice(0, 12) + "...";
      } else {
        return targetData;
      }
    }
  };

  return isLoading ? (
    <p>loading...</p>
  ) : (
    <>
      <div className="content-container">
        <Computer providerdata={providerdata} trimData={trimData} />
        <Database providerdata={providerdata} trimData={trimData} />
      </div>

      {/* download */}
      {downloadActive && <Download data={providerdata} />}
    </>
  );
};

export default SideBody;
