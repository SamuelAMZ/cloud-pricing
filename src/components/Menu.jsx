import React, { useContext } from "react";
import { VscClose } from "react-icons/vsc";
import MenuActiveContext from "../context/MenuActive";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const { MenuActive, changeMenuActive } = useContext(MenuActiveContext);

  return (
    <div className="side-menu">
      <div className="elm-back" onClick={() => changeMenuActive(false)}></div>
      <div className="side-menu-content">
        <ul onClick={() => changeMenuActive(false)}>
          <li>
            <NavLink to={"/"}>CLOUD PRICES APP</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>App</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/api"}>Api Docs</NavLink>
          </li>
        </ul>

        <a
          href="https://github.com/SamuelAMZ/cloud-pricing-api"
          target="_blank"
          onClick={() => changeMenuActive(false)}
        >
          <button>Github </button>
        </a>
      </div>

      <div className="close" onClick={() => changeMenuActive(false)}>
        <VscClose />
      </div>
    </div>
  );
};

export default Menu;
