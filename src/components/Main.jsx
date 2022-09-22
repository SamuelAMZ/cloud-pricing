import React, { useContext } from "react";
import Providers from "./Providers";
import More from "./More";
import Menu from "./Menu";
import { BiSearch } from "react-icons/bi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import MoreActiveContext from "../context/MoreIsActive";
import MenuActiveContext from "../context/MenuActive";

const Main = () => {
  const { moreActive, changeMoreActive } = useContext(MoreActiveContext);
  const { MenuActive, changeMenuActive } = useContext(MenuActiveContext);

  return (
    <div className="main">
      <div className="menu" onClick={() => changeMenuActive(true)}>
        <HiOutlineMenuAlt2 />
      </div>

      {MenuActive && <Menu />}

      <div className="heaading">
        <h2>Cloud Prices</h2>
        <p>A Node price app from different cloud services</p>
      </div>
      <div className="search" onClick={() => changeMoreActive(true)}>
        <form>
          <div className="icon">
            <BiSearch />
          </div>
          <input type="text" placeholder="Search for providers" readOnly />
        </form>
      </div>

      <div className="main-providers">
        <div className="title">
          Providers <span>(7)</span>
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
