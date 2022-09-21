import React, { useContext, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { FaAws, FaLinode, FaDigitalOcean } from "react-icons/fa";
import { SiGooglecloud, SiOvh, SiVultr } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import AllProviderContext from "../context/AllProviders";
import ActiveProviderContext from "../context/ActiveProvider";
import IsLoadingContext from "../context/IsLoading";
import DefaultCompContext from "../context/DefaultCompType";
import MoreActiveContext from "../context/MoreIsActive";
import CurrentActiveProviderIdContext from "../context/CurrentActiveProviderId";

const More = () => {
  let AllProviders = useContext(AllProviderContext);
  const { moreActive, changeMoreActive } = useContext(MoreActiveContext);
  const { changeActive } = useContext(ActiveProviderContext);
  const { isLoading, changeLoading } = useContext(IsLoadingContext);
  const { defaultComp, changeDefaultComp } = useContext(DefaultCompContext);
  const { currentActiveProviderId, changeCurrentActiveproviderId } = useContext(
    CurrentActiveProviderIdContext
  );

  const providers = AllProviders;

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

    // close more box
    changeMoreActive(false);
  };

  // set new id value
  useEffect(() => {
    Array.from(document.querySelectorAll(".more-provider")).forEach((item) => {
      // console.log(item);
      if (Number(item.getAttribute("data")) === currentActiveProviderId) {
        item.setAttribute("id", "active");
      }
    });
  }, [currentActiveProviderId]);

  // disable a div when it s data is currently displayed on the app
  useEffect(() => {
    Array.from(document.querySelectorAll(".more-provider")).forEach((item) => {
      // active the cursore event to all
      item.parentElement.style.pointerEvents = "auto";
      // disable the current one
      if (Number(item.getAttribute("data")) === currentActiveProviderId) {
        item.parentElement.style.pointerEvents = "none";
      }
    });
  }, [currentActiveProviderId]);

  // search feature
  const [searchTerm, setSearchTerm] = useState("");
  // count the number of search result live
  const [liveCount, setLiveCount] = useState(providers.length);

  useEffect(() => {
    setLiveCount(Array.from(document.querySelectorAll(".more-item")).length);
    // check, give the Id and disable the current provider div anyway on each search
    Array.from(document.querySelectorAll(".more-provider")).forEach((item) => {
      if (Number(item.getAttribute("data")) === currentActiveProviderId) {
        item.setAttribute("id", "active");
        item.parentElement.style.pointerEvents = "none";
      }
    });
  }, [searchTerm]);

  return (
    <div className="more">
      <div className="more-back" onClick={() => changeMoreActive(false)}></div>
      <div className="more-content">
        <div className="search more-search">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
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

            {liveCount === 0 && <p>Nothing found!</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
