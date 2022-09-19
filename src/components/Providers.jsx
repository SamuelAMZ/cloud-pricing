import React, { useState, useEffect, useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaAws, FaLinode, FaDigitalOcean } from "react-icons/fa";
import { SiGooglecloud, SiOvh, SiVultr } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import More from "./More";
import ActiveProviderContext from "../context/ActiveProvider";
import IsLoadingContext from "../context/IsLoading";
import DefaultCompContext from "../context/DefaultCompType";
import PricetypeContext from "../context/PriceType";
import MoreActiveContext from "../context/MoreIsActive";
import CurrentActiveProviderIdContext from "../context/CurrentActiveProviderId";

const Providers = () => {
  const providers = [
    {
      name: "linode",
      full: "Linode",
      id: 1,
      color: "linear-gradient(to right, #8e2de2, #4a00e0)",
      url: "https://cloud-pricing-362106.ue.r.appspot.com/api/v1/linode",
      pricePerMo: {
        compute: true,
        database: true,
      },
      pricePerHo: {
        compute: true,
        database: false,
      },
    },
    {
      name: "aws",
      full: "Amazon Web Services",
      id: 2,
      color: "linear-gradient(to right, #ff416c, #ff4b2b)",
      url: "https://cloud-pricing-362106.ue.r.appspot.com/api/v1/aws",
      pricePerMo: {
        compute: true,
        database: false,
      },
      pricePerHo: {
        compute: false,
        database: true,
      },
    },
    {
      name: "gcp",
      full: "Google Cloud Platform",
      id: 3,
      color: " linear-gradient(to right, #000428, #004e92)",
      url: "https://cloud-pricing-362106.ue.r.appspot.com/api/v1/gcp",
      pricePerMo: {
        compute: false,
        database: false,
      },
      pricePerHo: {
        compute: true,
        database: true,
      },
    },
    {
      name: "azure",
      full: "Azure",
      id: 4,
      color: "linear-gradient(to right, #659999, #f4791f)",
      url: "https://cloud-pricing-362106.ue.r.appspot.com/api/v1/azure",
      pricePerMo: {
        compute: true,
        database: false,
      },
      pricePerHo: {
        compute: false,
        database: true,
      },
    },

    {
      name: "digital Ocn",
      full: "Digital Ocean",
      id: 5,
      color: "linear-gradient(to right, #396afc, #2948ff)",
      url: "https://cloud-pricing-362106.ue.r.appspot.com/api/v1/digitalOcean",
      pricePerMo: {
        compute: true,
        database: true,
      },
      pricePerHo: {
        compute: true,
        database: false,
      },
    },
    {
      name: "ovh cloud",
      full: "Ovh Cloud",
      id: 6,
      color: "linear-gradient(to right, #59c173, #a17fe0, #5d26c1)",
      url: "https://cloud-pricing-362106.ue.r.appspot.com/api/v1/ovh",
      pricePerMo: {
        compute: false,
        database: true,
      },
      pricePerHo: {
        compute: true,
        database: true,
      },
    },
    {
      name: "vultr",
      full: "Vultr",
      id: 7,
      color: "linear-gradient(to right, #4e54c8, #8f94fb)",
      url: "https://cloud-pricing-362106.ue.r.appspot.com/api/v1/vultr",
      pricePerMo: {
        compute: true,
        database: false,
      },
      pricePerHo: {
        compute: true,
        database: false,
      },
    },
  ];

  const { changeActive } = useContext(ActiveProviderContext);
  const { isLoading, changeLoading } = useContext(IsLoadingContext);
  const { defaultComp, changeDefaultComp } = useContext(DefaultCompContext);
  const { pricetype, changePricetype } = useContext(PricetypeContext);
  const { moreActive, changeMoreActive } = useContext(MoreActiveContext);
  const { currentActiveProviderId, changeCurrentActiveproviderId } = useContext(
    CurrentActiveProviderIdContext
  );
  let max = 0;

  const activer = (e, provider) => {
    // empty the id value of the other childrens
    Array.from(e.target.parentElement.children).forEach((item) =>
      item.children[0].removeAttribute("id")
    );

    // set new id value
    Array.from(document.querySelectorAll(".provider")).forEach((item) => {
      let currentId = Number(item.getAttribute("data"));
      if (currentId === provider.id) {
        item.setAttribute("id", "active");
        // set the current active provider id
        changeCurrentActiveproviderId(currentId);
      }
    });

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
    // change price type
    if (provider.pricePerHo) {
      changePricetype("perho");
    }
    if (provider.pricePerMo) {
      changePricetype("permo");
    }
  };

  // set the first provider as the default active data
  useEffect(() => {
    document.querySelector(".item").children[0].setAttribute("id", "active");
  }, []);

  // disable a div when it s data is currently displayed on the app
  useEffect(() => {
    Array.from(document.querySelectorAll(".provider")).forEach((item) => {
      // active the cursore event to all
      item.parentElement.style.pointerEvents = "auto";
      // disable the current one
      if (Number(item.getAttribute("data")) === currentActiveProviderId) {
        item.parentElement.style.pointerEvents = "none";
      }
    });
  }, [currentActiveProviderId]);

  // disable all div when data is loading
  useEffect(() => {
    if (isLoading) {
      Array.from(document.querySelectorAll(".provider")).forEach((item) => {
        // disable all element when loading
        item.parentElement.style.pointerEvents = "none";
      });
    }

    Array.from(document.querySelectorAll(".provider")).forEach(
      (item) => {
        if (
          !isLoading &&
          Number(item.getAttribute("data")) !== currentActiveProviderId
        ) {
          item.parentElement.style.pointerEvents = "auto";
        }
      },
      [isLoading]
    );
  });

  return (
    <>
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
                <div
                  style={{ background: provider.color }}
                  className="provider"
                  data={provider.id}
                >
                  {provider.id === 1 && <FaLinode />}
                  {provider.id === 2 && <FaAws />}
                  {provider.id === 3 && <SiGooglecloud />}
                  {provider.id === 4 && <VscAzure />}
                  {provider.id === 5 && <FaDigitalOcean />}
                  {provider.id === 6 && <SiOvh />}
                  {provider.id === 7 && <SiVultr />}
                </div>
                <p>{provider.name}</p>
              </div>
            );
          }
        })}
        <div className="item" onClick={() => changeMoreActive(true)}>
          <div className="provider" style={{ backgroundColor: "blue" }}>
            <AiOutlinePlus />
          </div>
          <p>More ...</p>
        </div>
      </div>
    </>
  );
};

export default Providers;
