import React from "react";
import { HiDownload } from "react-icons/hi";

const SideHeader = () => {
  return (
    <div className="side-header">
      <div className="title">
        <h2>Linode</h2>
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
