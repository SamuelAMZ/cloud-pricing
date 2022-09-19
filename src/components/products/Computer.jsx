import React, { useState, useContext, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaAws, FaLinode, FaDigitalOcean } from "react-icons/fa";
import { SiGooglecloud, SiOvh, SiVultr } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import ActiveProviderContext from "../../context/ActiveProvider";
import DefaultCompContext from "../../context/DefaultCompType";
import PricetypeContext from "../../context/PriceType";

const Computer = ({ providerdata, trimData }) => {
  const { active } = useContext(ActiveProviderContext);
  const { defaultComp, changeDefaultComp } = useContext(DefaultCompContext);
  const { pricetype, changePricetype } = useContext(PricetypeContext);

  // handle the displaying of a max of 5 data on the first load
  const [maxComp, setMaxComp] = useState(5);
  const checkAndRemoveActions = () => {
    const check = maxComp >= takeComputerType().length - 1;
    return !check;
  };

  // // handle type of computer changes from select
  const [typeOfComputer, setTypeOfComputer] = useState(defaultComp);
  const takeComputerType = () => {
    if (typeOfComputer === "computeData" || defaultComp === "computeData") {
      // console.log(providerdata.computer.computeData);
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

  useEffect(() => {
    // set the default computer type to "general purposes"
    setTypeOfComputer("general");
    // reset the mexcomp to 5 every load of the component
    setMaxComp(5);
  }, [active]);

  return (
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
              onChange={(e) => changePricetype(e.target.value)}
            >
              {active.pricePerMo && (
                <option value="permo">Price Per Month</option>
              )}
              {active.pricePerHo && (
                <option value="perho">Price Per Hour</option>
              )}
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
                    takeComputerType()[takeComputerType().length - 1].sizes.cpu}
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
                    takeComputerType()[takeComputerType().length - 1].sizes.ram}
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
                  {pricetype === "permo" &&
                    trimData(data.pricePerMo) +
                      " " +
                      takeComputerType()[takeComputerType().length - 1]
                        .currency}
                  {pricetype === "perho" &&
                    data.pricePerHour +
                      " " +
                      takeComputerType()[takeComputerType().length - 1]
                        .currency}
                </p>
              );
            })}
        </div>
      </div>

      <div className="next-actions">
        {checkAndRemoveActions() && (
          <>
            <button onClick={() => setMaxComp(maxComp + 5)}>Next 5 data</button>
            <button onClick={() => setMaxComp(maxComp + 50)}>Next 50</button>
          </>
        )}
        {!checkAndRemoveActions() && <p>You have everything!</p>}
        {maxComp > 5 && (
          <button onClick={() => setMaxComp(5)}>Less data</button>
        )}
      </div>
    </div>
  );
};

export default Computer;
