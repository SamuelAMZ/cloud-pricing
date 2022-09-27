import React, { useState, useContext, useEffect } from "react";
import { FaAws, FaLinode, FaDigitalOcean } from "react-icons/fa";
import { SiGooglecloud, SiOvh, SiVultr } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import ActiveProviderContext from "../../context/ActiveProvider";
import DefaultNetworkingContext from "../../context/DefaultNetworkingType";
import { TailSpin } from "react-loader-spinner";

const Networking = ({ providerdata, trimData }) => {
  const { active } = useContext(ActiveProviderContext);
  const { defaultNetworking, changeDefaultNetworking } = useContext(
    DefaultNetworkingContext
  );

  const [activePrice, setActivePrice] = useState("");
  const [dataLoading, setDataloading] = useState(false);

  // // handle type of computer changes from select
  const [typeOfNetworking, setTypeOfNetworking] = useState(defaultNetworking);
  const takeNetworkingType = () => {
    if (typeOfNetworking === "nodebalancers") {
      return providerdata.networking.nodeBalancers;
    }
  };

  // handle the displaying of a max of 5 data on the first load
  const [maxComp, setMaxComp] = useState(5);
  const checkAndRemoveActions = () => {
    const check = maxComp >= takeNetworkingType().length - 1;
    return !check;
  };

  useEffect(() => {
    // set the default computer type to "general purposes"
    setTypeOfNetworking("nodebalancers");
    // reset the mexcomp to 5 every load of the component
    setMaxComp(5);
  }, [active]);

  // handling the prices
  useEffect(() => {
    // permo check
    if (active.pricePerMo.networking && active.pricePerHo.networking) {
      setActivePrice("permo");
    }
    if (active.pricePerMo.networking && !active.pricePerHo.networking) {
      setActivePrice("permo");
    }
    // perho check
    if (!active.pricePerMo.networking && active.pricePerHo.networking) {
      setActivePrice("perho");
    }
  }, []);

  // spin 1sec before data change
  useEffect(() => {
    setDataloading(true);

    setTimeout(() => {
      setDataloading(false);
    }, 250);
  }, [typeOfNetworking]);

  return (
    <div className="computer">
      <div className="title">
        <h3>Networking data</h3>

        <div className="details">
          <form id="typeofdatabase">
            <select onChange={(e) => setTypeOfNetworking(e.target.value)}>
              <option value="nodebalancers">Node Balancers</option>
            </select>
          </form>
          <form id="typeofprice">
            <select onChange={(e) => setActivePrice(e.target.value)}>
              {active.pricePerMo.networking && (
                <option value="permo">Price Per Month</option>
              )}
              {active.pricePerHo.networking && (
                <option value="perho">Price Per Hour</option>
              )}
            </select>
          </form>
        </div>
      </div>

      {dataLoading ? (
        <TailSpin
          height="50"
          width="100%"
          color="#2d05be"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <>
          <div className="data datanetworking">
            <div className="logo">
              <p>Company</p>
              {takeNetworkingType()
                .slice(0, maxComp)
                .map((data, id) => {
                  if (id === takeNetworkingType().length - 1) {
                    return;
                  }
                  return (
                    <p key={id}>
                      {active.id === 1 && (
                        <>
                          <FaLinode /> <span> Linode</span>
                        </>
                      )}
                      {active.id === 2 && (
                        <>
                          <FaAws /> <span> AWS</span>
                        </>
                      )}
                      {active.id === 3 && (
                        <>
                          <SiGooglecloud />
                          <span> GCP</span>
                        </>
                      )}
                      {active.id === 4 && (
                        <>
                          <VscAzure />
                          <span> Azure</span>
                        </>
                      )}
                      {active.id === 5 && (
                        <>
                          <FaDigitalOcean />
                          <span> DigitalO</span>
                        </>
                      )}
                      {active.id === 6 && (
                        <>
                          <SiOvh />
                          <span> OVH</span>
                        </>
                      )}
                      {active.id === 7 && (
                        <>
                          <SiVultr />
                          <span> Vultr</span>
                        </>
                      )}
                    </p>
                  );
                })}
            </div>
            <div className="value">
              <p>value</p>
              {takeNetworkingType()
                .slice(0, maxComp)
                .map((data, id) => {
                  if (id === takeNetworkingType().length - 1) {
                    return;
                  }
                  return <p key={id}>{trimData(data.title)} </p>;
                })}
            </div>
            <div className="price">
              <p>Price</p>
              {takeNetworkingType()
                .slice(0, maxComp)
                .map((data, id) => {
                  if (id === takeNetworkingType().length - 1) {
                    return;
                  }
                  return (
                    <p key={id}>
                      {activePrice === "permo" &&
                        trimData(data.pricePerMo) +
                          " " +
                          takeNetworkingType()[takeNetworkingType().length - 1]
                            .currency}
                      {activePrice === "perho" &&
                        data.pricePerHour +
                          " " +
                          takeNetworkingType()[takeNetworkingType().length - 1]
                            .currency}
                    </p>
                  );
                })}
            </div>
          </div>

          <div className="next-actions">
            {maxComp > 5 && (
              <button className="less" onClick={() => setMaxComp(5)}>
                Less data
              </button>
            )}
            {checkAndRemoveActions() && (
              <>
                <button onClick={() => setMaxComp(maxComp + 5)}>
                  Next 5 data
                </button>
                <button onClick={() => setMaxComp(maxComp + 50)}>
                  Next 50
                </button>
              </>
            )}
            {!checkAndRemoveActions() && <p>You have everything!</p>}
          </div>
        </>
      )}
    </div>
  );
};

export default Networking;
