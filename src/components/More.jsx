import React, { useContext, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { FaAws, FaLinode, FaDigitalOcean } from "react-icons/fa";
import { SiGooglecloud, SiOvh, SiVultr } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import ActiveProviderContext from "../context/ActiveProvider";
import IsLoadingContext from "../context/IsLoading";
import DefaultCompContext from "../context/DefaultCompType";
import PricetypeContext from "../context/PriceType";
import MoreActiveContext from "../context/MoreIsActive";
import CurrentActiveProviderIdContext from "../context/CurrentActiveProviderId";

const More = () => {
  const { moreActive, changeMoreActive } = useContext(MoreActiveContext);
  const { changeActive } = useContext(ActiveProviderContext);
  const { isLoading, changeLoading } = useContext(IsLoadingContext);
  const { defaultComp, changeDefaultComp } = useContext(DefaultCompContext);
  const { pricetype, changePricetype } = useContext(PricetypeContext);
  const { currentActiveProviderId, changeCurrentActiveproviderId } = useContext(
    CurrentActiveProviderIdContext
  );

  const providers = [
    {
      name: "linode",
      full: "Linode",
      tags: "linode",
      id: 1,
      color: "linear-gradient(to right, #8e2de2, #4a00e0)",
      url: "https://cloud-pricing-362106.ue.r.appspot.com/api/v1/linode",
      pricePerMo: true,
      pricePerHo: true,
    },
    {
      name: "aws",
      full: "Amazon Web Services",
      tags: "amazon web services aws",
      id: 2,
      color: "linear-gradient(to right, #ff416c, #ff4b2b)",
      url: "https://cloud-pricing-362106.ue.r.appspot.com/api/v1/aws",
      pricePerMo: true,
      pricePerHo: false,
    },
    {
      name: "gcp",
      full: "Google Cloud Platform",
      tags: "Google Cloud Platform gcp",
      id: 3,
      color: " linear-gradient(to right, #000428, #004e92)",
      url: "https://cloud-pricing-362106.ue.r.appspot.com/api/v1/gcp",
      pricePerMo: false,
      pricePerHo: true,
    },
    {
      name: "azure",
      full: "Azure",
      tags: "azure",
      id: 4,
      color: "linear-gradient(to right, #659999, #f4791f)",
      url: "https://cloud-pricing-362106.ue.r.appspot.com/api/v1/azure",
      pricePerMo: true,
      pricePerHo: false,
    },

    {
      name: "digital Ocn",
      full: "Digital Ocean",
      tags: "digital ocean ocn digitalo",
      id: 5,
      color: "linear-gradient(to right, #396afc, #2948ff)",
      url: "https://cloud-pricing-362106.ue.r.appspot.com/api/v1/digitalOcean",
      pricePerMo: true,
      pricePerHo: true,
    },
    {
      name: "ovh cloud",
      full: "Ovh Cloud",
      tags: "ovh cloud",
      id: 6,
      color: "linear-gradient(to right, #59c173, #a17fe0, #5d26c1)",
      url: "https://cloud-pricing-362106.ue.r.appspot.com/api/v1/ovh",
      pricePerMo: false,
      pricePerHo: true,
    },
    {
      name: "vultr",
      full: "Vultr",
      tags: "vultr",
      id: 7,
      color: "linear-gradient(to right, #4e54c8, #8f94fb)",
      url: "https://cloud-pricing-362106.ue.r.appspot.com/api/v1/vultr",
      pricePerMo: true,
      pricePerHo: true,
    },
  ];

  const activer = (e, provider) => {
    // empty the id value of the other childrens
    Array.from(document.querySelectorAll(".provider")).forEach((item) => {
      item.removeAttribute("id");
    });
    // // set the id
    Array.from(document.querySelectorAll(".provider")).forEach((item) => {
      let currentId = Number(item.getAttribute("data"));
      if (currentId === provider.id) {
        item.setAttribute("id", "active");
        // set the current active id
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
    // close more box
    changeMoreActive(false);
  };

  useEffect(() => {
    Array.from(document.querySelectorAll(".more-provider")).forEach((item) => {
      // console.log(item);
      if (Number(item.getAttribute("data")) === currentActiveProviderId) {
        item.setAttribute("id", "active");
      }
    });
  }, [currentActiveProviderId]);

  // search feature
  const [searchTerm, setSearchTerm] = useState("");
  // count the number of search result live
  const [liveCount, setLiveCount] = useState(providers.length);

  useEffect(() => {
    setLiveCount(Array.from(document.querySelectorAll(".more-item")).length);
  }, [searchTerm]);

  return (
    <div className="more">
      <div className="more-back" onClick={() => changeMoreActive(false)}></div>
      <div className="more-content">
        <div className="search more-search">
          <form>
            <div className="icon">
              <BiSearch />
            </div>
            <input
              type="text"
              placeholder="Search for providers"
              onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
              autoFocus
            />
          </form>
        </div>
        <div className="main-providers">
          <div className="title">
            Providers <span>({liveCount})</span>
          </div>
          <div className="providers">
            <div className="providers-container more-provider">
              {providers
                .filter((provider) =>
                  provider.tags.toLowerCase().includes(searchTerm)
                )
                .map((provider) => {
                  return (
                    <div
                      className="item more-item"
                      key={provider.id}
                      onClick={(e) => activer(e, provider)}
                    >
                      <div
                        style={{ background: provider.color }}
                        className="provider more-provider"
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
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
