import React, { useState, useEffect, useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaAws, FaLinode, FaDigitalOcean } from "react-icons/fa";
import { SiGooglecloud, SiOvh, SiVultr } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import ActiveProviderContext from "../context/ActiveProvider";
import IsLoadingContext from "../context/IsLoading";
import DefaultCompContext from "../context/DefaultCompType";

const Providers = () => {
  const providers = [
    {
      name: "linode",
      full: "Linode",
      id: 1,
      color: "linear-gradient(to right, #8e2de2, #4a00e0)",
      url: "https://cloud-pricing-362106.ue.r.appspot.com/api/v1/linode",
    },
    {
      name: "aws",
      full: "Amazon Web Services",
      id: 2,
      color: "linear-gradient(to right, #ff416c, #ff4b2b)",
      url: "https://cloud-pricing-362106.ue.r.appspot.com/api/v1/aws",
    },
    {
      name: "gcp",
      full: "Google Cloud Platform",
      id: 3,
      color: " linear-gradient(to right, #000428, #004e92)",
      url: "https://cloud-pricing-362106.ue.r.appspot.com/api/v1/gcp",
    },
    {
      name: "azure",
      full: "Azure",
      id: 4,
      color: "linear-gradient(to right, #659999, #f4791f)",
      url: "https://cloud-pricing-362106.ue.r.appspot.com/api/v1/azure",
    },

    {
      name: "digital Ocn",
      full: "Digital Ocean",
      id: 5,
      color: "linear-gradient(to right, #396afc, #2948ff)",
      url: "https://cloud-pricing-362106.ue.r.appspot.com/api/v1/digitalOcean",
    },
    {
      name: "ovh cloud",
      full: "Ovh Cloud",
      id: 6,
      color: "linear-gradient(to right, #59c173, #a17fe0, #5d26c1)",
      url: "https://cloud-pricing-362106.ue.r.appspot.com/api/v1/ovh",
    },
    {
      name: "vultr",
      full: "Vultr",
      id: 7,
      color: "linear-gradient(to right, #4e54c8, #8f94fb)",
      url: "https://cloud-pricing-362106.ue.r.appspot.com/api/v1/vultr",
    },
  ];

  const { changeActive } = useContext(ActiveProviderContext);
  const { isLoading, changeLoading } = useContext(IsLoadingContext);
  const { defaultComp, changeDefaultComp } = useContext(DefaultCompContext);
  let max = 0;

  const activer = (e, provider) => {
    // empty the id value of the other childrens
    Array.from(e.target.parentElement.children).forEach((item) =>
      item.children[0].removeAttribute("id")
    );
    // set new id value
    e.target.children[0].setAttribute("id", "active");
    // set the new global active provider or product
    changeActive(provider);
    // set the new global state of isLoading
    changeLoading(true);
    // change or not default computer type
    if (provider.id === 2 || provider.id === 3 || provider.id === 4) {
      changeDefaultComp("computeData");
    } else {
      changeDefaultComp("general");
    }
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
