import React, { useContext } from "react";
import Providers from "./Providers";
import More from "./More";
import { BiSearch } from "react-icons/bi";
import MoreActiveContext from "../context/MoreIsActive";

const Main = () => {
  const { moreActive, changeMoreActive } = useContext(MoreActiveContext);

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

      <div className="layers">
        <img className="layer1" src="/layers.png" alt="layers" />
        <img className="layer2" src="/layers.png" alt="layers" />
      </div>

      {/* more popup */}
      {moreActive && <More />}
    </div>
  );
};

export default Main;
