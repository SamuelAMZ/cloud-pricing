import React, { useContext } from "react";
import { VscClose } from "react-icons/vsc";
import MenuActiveContext from "../context/MenuActive";

const Menu = () => {
  const { MenuActive, changeMenuActive } = useContext(MenuActiveContext);

  return (
    <div className="side-menu">
      <div className="elm-back" onClick={() => changeMenuActive(false)}></div>
      <div className="side-menu-content">
        <ul>
          <li>Cloud Prices App</li>
          <li>App</li>
          <li>About</li>
          <li>API docs</li>
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
