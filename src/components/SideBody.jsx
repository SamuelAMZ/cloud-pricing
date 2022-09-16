import React, { useContext, useState, useEffect } from "react";
import useGetData from "../hooks/useGetData";
import { AiOutlinePlus } from "react-icons/ai";
import { FaAws, FaLinode, FaDigitalOcean } from "react-icons/fa";
import { SiGooglecloud, SiOvh, SiVultr } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import ActiveProviderContext from "../context/ActiveProvider";
import DefaultCompContext from "../context/DefaultCompType";

const SideBody = () => {
  const { active } = useContext(ActiveProviderContext);
  const { defaultComp, changeDefaultComp } = useContext(DefaultCompContext);

  const {
    currentData: providerdata,
    isError,
    isLoading,
  } = useGetData(active.url);

  // handle type of computer changes from select
  const [typeOfComputer, setTypeOfComputer] = useState(defaultComp);

  const takeComputerType = () => {
    console.log(defaultComp + new Date().getMilliseconds());

    if (typeOfComputer === "computeData" || defaultComp === "computeData") {
      console.log(providerdata.computer.computeData);
      return providerdata.computer.computeData;
    }
    if (typeOfComputer === "general") {
      return providerdata.computer.generalPurpose;
    }
    if (typeOfComputer === "ram") {
      return providerdata.computer.ramOptimized;
    }
    if (typeOfComputer === "cpu") {
      return providerdata.computer.cpuOptimized;
    }
  };
  // handle type of price from select
  const [typeOfPrice, setTypeOfPrice] = useState("permo");
  // handle the displaying of a max of 5 data on the first load
  const [maxComp, setMaxComp] = useState(5);
  const checkAndRemoveActions = () => {
    const check = maxComp >= takeComputerType().length - 1;
    return !check;
  };
  // trim too long data strings
  const trimData = (targetData) => {
    if (targetData.length >= 10) {
      return targetData.slice(0, 10) + "...";
    } else {
      return targetData;
    }
  };

  return isLoading ? (
    <p>loading...</p>
  ) : (
    <div className="content-container">
      <div className="computer">
        <div className="title">
          <h3>Compute data</h3>

          <div className="details">
            <p>Last Update {providerdata.lastUpdate}</p>
            <form id="typeofcomputer">
              <select
                name="computer"
                onChange={(e) => setTypeOfComputer(e.target.value)}
              >
                {defaultComp === "computeData" ? (
                  <option value="computeData">Compute data</option>
                ) : (
                  <>
                    <option value="general">General purpose</option>
                    <option value="cpu">CPU optimized</option>
                    <option value="ram">RAM optimized</option>
                  </>
                )}
              </select>
            </form>
            <form id="typeofprice">
              <select
                name="price"
                onChange={(e) => setTypeOfPrice(e.target.value)}
              >
                <option value="permo">Price Per Month</option>
                <option value="perho">Price Per Hour</option>
              </select>
            </form>
          </div>
        </div>

        <div className="data datacomputer">
          <div className="logo">
            <p>Company</p>
            {takeComputerType()
              .slice(0, maxComp)
              .map((data, id) => {
                if (id === takeComputerType().length - 1) {
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
                        <SiOvh />
                        <span> OVH</span>
                      </>
                    )}
                    {active.id === 6 && (
                      <>
                        <FaDigitalOcean />
                        <span> DO</span>
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
          <div className="name">
            <p>name</p>
            {takeComputerType()
              .slice(0, maxComp)
              .map((data, id) => {
                if (id === takeComputerType().length - 1) {
                  return;
                }
                return <p key={id}>{data.title} </p>;
              })}
          </div>
          <div className="cpu">
            <p>CPU</p>
            {takeComputerType()
              .slice(0, maxComp)
              .map((data, id) => {
                if (id === takeComputerType().length - 1) {
                  return;
                }
                return (
                  <p key={id}>
                    {trimData(data.cpu) +
                      " " +
                      takeComputerType()[takeComputerType().length - 1].sizes
                        .cpu}
                  </p>
                );
              })}
          </div>
          <div className="ram">
            <p>RAM</p>
            {takeComputerType()
              .slice(0, maxComp)
              .map((data, id) => {
                if (id === takeComputerType().length - 1) {
                  return;
                }
                return (
                  <p key={id}>
                    {trimData(data.ram) +
                      " " +
                      takeComputerType()[takeComputerType().length - 1].sizes
                        .ram}
                  </p>
                );
              })}
          </div>
          <div className="price">
            <p>Price</p>
            {takeComputerType()
              .slice(0, maxComp)
              .map((data, id) => {
                if (id === takeComputerType().length - 1) {
                  return;
                }
                return (
                  <p key={id}>
                    {typeOfPrice === "permo"
                      ? data.pricePerMo
                        ? trimData(data.pricePerMo) +
                          " " +
                          takeComputerType()[takeComputerType().length - 1]
                            .currency
                        : "Not Available"
                      : data.pricePerHour
                      ? trimData(data.pricePerHour) +
                        " " +
                        takeComputerType()[takeComputerType().length - 1]
                          .currency
                      : "Not Available"}
                  </p>
                );
              })}
          </div>
        </div>

        <div className="next-actions">
          {checkAndRemoveActions() && (
            <>
              <button onClick={() => setMaxComp(maxComp + 5)}>
                Next 5 data
              </button>
              <button onClick={() => setMaxComp(maxComp + 50)}>Next 50</button>
            </>
          )}
          {!checkAndRemoveActions() && <p>You have everything!</p>}
          {maxComp > 5 && (
            <button onClick={() => setMaxComp(5)}>Less data</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBody;
