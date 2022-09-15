import React from "react";
import SideHeader from "./SideHeader";
import SideBody from "./SideBody";

const Side = () => {
  return (
    <div className="side">
      <div className="side-container">
        <SideHeader />
        <SideBody />
      </div>
    </div>
  );
};

export default Side;
