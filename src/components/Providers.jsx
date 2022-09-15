import React, { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaAws, FaLinode, FaDigitalOcean } from "react-icons/fa";
import { SiGooglecloud, SiOvh, SiVultr } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

const Providers = () => {
  const providers = [
    {
      name: "linode",
      id: 1,
      color: "linear-gradient(to right, #8e2de2, #4a00e0)",
    },
    {
      name: "aws",
      id: 2,
      color: "linear-gradient(to right, #ff416c, #ff4b2b)",
    },
    {
      name: "gcp",
      id: 3,
      color: " linear-gradient(to right, #000428, #004e92)",
    },
    {
      name: "azure",
      id: 4,
      color: "linear-gradient(to right, #659999, #f4791f)",
    },

    {
      name: "digital Ocn",
      id: 5,
      color: "linear-gradient(to right, #396afc, #2948ff)",
    },
    {
      name: "ovh cloud",
      id: 6,
      color: "linear-gradient(to right, #59c173, #a17fe0, #5d26c1)",
    },
    {
      name: "vultr",
      id: 7,
      color: "linear-gradient(to right, #4e54c8, #8f94fb)",
    },
  ];

  let max = 0;

  const [currentPro, setCurrentPro] = useState(1);

  const activer = (e, provider) => {
    // empty the id value of the other childrens
    Array.from(e.target.parentElement.children).forEach((item) =>
      item.children[0].removeAttribute("id")
    );
    // set new id value
    e.target.children[0].setAttribute("id", "active");
  };

  useEffect(() => {
    document.querySelector(".item").children[0].setAttribute("id", "active");
  }, []);

  return (
    <div className="providers-container">
      {providers.map((provider) => {
        if (max <= 4) {
          max++;
          return (
            <div
              className="item"
              key={provider.id}
              onClick={(e) => activer(e, provider)}
            >
              <div style={{ background: provider.color }} className="provider">
                {provider.id === 1 && <FaLinode />}
                {provider.id === 2 && <FaAws />}
                {provider.id === 3 && <SiGooglecloud />}
                {provider.id === 4 && <VscAzure />}
                {provider.id === 5 && <SiOvh />}
                {provider.id === 6 && <FaDigitalOcean />}
                {provider.id === 7 && <SiVultr />}
              </div>
              <p>{provider.name}</p>
            </div>
          );
        }
      })}
      <div className="item">
        <div className="provider" style={{ backgroundColor: "blue" }}>
          <AiOutlinePlus />
        </div>
        <p>More ...</p>
      </div>
    </div>
  );
};

export default Providers;
