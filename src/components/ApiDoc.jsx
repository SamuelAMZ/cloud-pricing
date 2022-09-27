import React, { useContext } from "react";
import Menu from "../components/Menu";
import MenuActiveContext from "../context/MenuActive";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";

const ApiDoc = () => {
  const { MenuActive, changeMenuActive } = useContext(MenuActiveContext);

  return (
    <div className="about-container">
      <div className="menu" onClick={() => changeMenuActive(true)}>
        <HiOutlineMenuAlt2 />
      </div>

      {MenuActive && <Menu />}

      <div className="info">
        <div className="elements">
          <h1>API Docs</h1>

          <div className="api-elm">
            <h3>Coming Soon</h3>
          </div>
        </div>

        <div className="buttons">
          <button>
            <a href="https://github.com/SamuelAMZ/cloud-pricing-api">
              <FiGithub /> Backend
            </a>
          </button>
          <button>
            <a href="https://github.com/SamuelAMZ/cloud-pricing">
              <FiGithub /> Frontend
            </a>
          </button>

          <button>
            <a href="https://github.com/SamuelAMZ/cloud-pricing-api/issues">
              <FiGithub /> Report issue
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApiDoc;
