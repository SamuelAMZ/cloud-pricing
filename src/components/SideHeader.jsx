import React, { useContext, useState } from "react";
import ActiveProviderContext from "../context/ActiveProvider";
import { HiDownload } from "react-icons/hi";

const SideHeader = () => {
  const { active } = useContext(ActiveProviderContext);

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
        <div className="download">
          <HiDownload />
        </div>
      </div>
    </div>
  );
};

export default SideHeader;
