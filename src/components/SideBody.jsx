import React, { useContext, useState, useEffect } from "react";
import Download from "./Download";
import Computer from "./products/Computer";
import Database from "./products/Database";
import Storage from "./products/Storage";
import Networking from "./products/Networking";
import useGetData from "../hooks/useGetData";
import ActiveProviderContext from "../context/ActiveProvider";
import DownloadActiveContext from "../context/DownloadIsActive";
import { TailSpin } from "react-loader-spinner";

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

  // setting the last update to localstorage
  if (providerdata)
    localStorage.setItem("lastU", JSON.stringify(providerdata.lastUpdate));

  // trim too long data strings
  const trimData = (targetData) => {
    if (targetData) {
      if (targetData.length >= 8) {
        return targetData.slice(0, 7) + "...";
      } else {
        return targetData;
      }
    }
  };

  return isLoading ? (
    <TailSpin
      height="80"
      width="100%"
      color="#2d05be"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  ) : (
    <>
      <div className="content-container">
        <Computer providerdata={providerdata} trimData={trimData} />
        <Database providerdata={providerdata} trimData={trimData} />
        <Storage providerdata={providerdata} trimData={trimData} />
        <Networking providerdata={providerdata} trimData={trimData} />
      </div>

      {/* download */}
      {downloadActive && <Download data={providerdata} />}
    </>
  );
};

export default SideBody;
