import React, { useContext } from "react";
import Menu from "../components/Menu";
import MenuActiveContext from "../context/MenuActive";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";

const AboutInfo = () => {
  const { MenuActive, changeMenuActive } = useContext(MenuActiveContext);

  return (
    <div className="about-container">
      <div className="menu" onClick={() => changeMenuActive(true)}>
        <HiOutlineMenuAlt2 />
      </div>

      {MenuActive && <Menu />}

      <div className="info">
        <div className="elements">
          <h1>About</h1>
          <hr />

          <div className="elm">
            <h3>Frontend</h3>
            <p>
              Technologies:
              <span>
                Reactjs, ContextAPI, Axios, React-router-dom, Hooks, SCSS.
              </span>
              <br /> A small frontend that has become quite technical over time
              but fun.
            </p>
          </div>
          <div className="elm">
            <h3>Backend</h3>
            <p>
              Technologies:
              <span>
                Nodejs, ExpressJs, Mongodb driver, Mongoose, JWT, Bcrypt,
                @hapi/joi ...
              </span>
              <br /> A typical Node Express backend for building the API and
              functionality to create and connect to a developer account to use
              the API Soon finished.
            </p>
          </div>
          <div className="elm">
            <h3>Scraper</h3>
            <p>
              Technologies :
              <span>
                Puppeteer, Puppeteer-extra, Puppeteer-extra-plugin-stealth.
              </span>
              <br /> Good scrapping with Puppeteer from 7 providers for the
              moment.
            </p>
          </div>
          <div className="elm">
            <h3>Deployement</h3>
            <p>
              Frontend hosted on <span>Netlify</span>
              <br />
              Backend hosted on App engine <span>Google Cloud Platform</span>
              <br />
              Database hosted on <span>MongoDB Atlas</span> <br />
              Scraper on a cron Job on an Ubuntu instance at <span>Linode</span>
            </p>
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

export default AboutInfo;
