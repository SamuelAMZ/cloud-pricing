import React from "react";
import Providers from "./Providers";
import { BiSearch } from "react-icons/bi";

const Main = () => {
  return (
    <div className="main">
      <div className="heaading">
        <h2>Hi John</h2>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
      <div className="search">
        <form>
          <div className="icon">
            <BiSearch />
          </div>
          <input type="text" placeholder="Search for prices" />
        </form>
      </div>

      <div className="main-providers">
        <div className="title">
          Providers <span>(15)</span>
        </div>
        <div className="providers">
          <Providers />
        </div>
      </div>
    </div>
  );
};

export default Main;
