import React, { useContext, useState } from "react";
import ActiveProviderContext from "../context/ActiveProvider";
import DownloadActiveContext from "../context/DownloadIsActive";
import { HiDownload } from "react-icons/hi";

const SideHeader = () => {
  const { active } = useContext(ActiveProviderContext);
  const { downloadActive, changeDownloadActive } = useContext(
    DownloadActiveContext
  );

  return (
    <div className="side-header">
      <div className="title">
        <h2>{active.full}</h2>
        <div className="underline">
          <span></span>
          <span></span>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A fugiat
          corrupti animi distincti
        </p>
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
