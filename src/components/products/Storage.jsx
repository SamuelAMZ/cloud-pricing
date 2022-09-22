import React, { useState, useContext, useEffect } from "react";
import { FaAws, FaLinode, FaDigitalOcean } from "react-icons/fa";
import { SiGooglecloud, SiOvh, SiVultr } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import ActiveProviderContext from "../../context/ActiveProvider";
import DefaultStorageContext from "../../context/DefaultStorageType";

const Storage = ({ providerdata, trimData }) => {
  const { active } = useContext(ActiveProviderContext);
  const { defaultStorage, changeDefaultStorage } = useContext(
    DefaultStorageContext
  );

  const [activePrice, setActivePrice] = useState("");

  // handle the displaying of a max of 5 data on the first load
  const [maxComp, setMaxComp] = useState(5);
  const checkAndRemoveActions = () => {
    const check = maxComp >= takeStorageType().length - 1;
    return !check;
  };

  // // handle type of computer changes from select
  const [typeOfStorage, setTypeOfStorage] = useState(active.storage[0]);
  const takeStorageType = () => {
    if (typeOfStorage === "block") {
      return providerdata.storage.blockStorage;
    }
    if (typeOfStorage === "object") {
      return providerdata.storage.objectStorage;
    }
    if (typeOfStorage === "S3Standard") {
      return providerdata.storage.S3Standard;
    }
    if (typeOfStorage === "S3OneZone") {
      return providerdata.storage.S3OneZone;
    }
    if (typeOfStorage === "standard") {
      return providerdata.storage.standard;
    }
    if (typeOfStorage === "nearline") {
      return providerdata.storage.nearline;
    }
    if (typeOfStorage === "premium") {
      return providerdata.storage.premium;
    }
    if (typeOfStorage === "standard") {
      return providerdata.storage.standard;
    }
  };

  useEffect(() => {
    // reset the mexcomp to 5 every load of the component
    setMaxComp(5);
  }, [active]);

  // handling the prices
  useEffect(() => {
    // permo check
    if (active.pricePerMo.storage && active.pricePerHo.storage) {
      setActivePrice("permo");
    }
    if (active.pricePerMo.storage && !active.pricePerHo.storage) {
      setActivePrice("permo");
    }
    // perho check
    if (!active.pricePerMo.storage && active.pricePerHo.storage) {
      setActivePrice("perho");
    }
  }, []);
  // handling storage type
  // useEffect(() => {
  //   takeStorageType();
  //   console.log(takeStorageType());
  //   console.log(typeOfStorage);
  //   console.log(defaultStorage);
  // }, [typeOfStorage]);

  return (
    <div className="computer">
      <div className="title">
        <h3>Storage data</h3>

        <div className="details">
          <form id="typeofcomputer">
            <select
              name="storage"
              onChange={(e) => setTypeOfStorage(e.target.value)}
            >
              {active.storage[0] === "block" && (
                <option value="block">Block Storage</option>
              )}
              {active.storage[1] === "object" && (
                <option value="object">Object Storage</option>
              )}
              {active.storage[0] === "S3Standard" && (
                <option value="S3Standard">S3Standard</option>
              )}
              {active.storage[1] === "S3OneZone" && (
                <option value="S3OneZone">S3OneZone</option>
              )}
              {active.storage[0] === "standard" && (
                <option value="standard">Standard</option>
              )}
              {active.storage[1] === "nearline" && (
                <option value="nearline">Nearline</option>
              )}
              {active.storage[0] === "premium" && (
                <option value="premium">Premium</option>
              )}
              {active.storage[1] === "standard" && (
                <option value="standard">Standard</option>
              )}
            </select>
          </form>
          <form id="typeofprice">
            <select onChange={(e) => setActivePrice(e.target.value)}>
              {active.pricePerMo.storage && (
                <option value="permo">Price Per Month</option>
              )}
              {active.pricePerHo.storage && (
                <option value="perho">Price Per Hour</option>
              )}
            </select>
          </form>
        </div>
      </div>

      <div className="data datastorage">
        <div className="logo">
          <p>Company</p>
          {takeStorageType()
            .slice(0, maxComp)
            .map((data, id) => {
              if (id === takeStorageType().length - 1) {
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
        <div className="space">
          <p>space</p>
          {takeStorageType()
            .slice(0, maxComp)
            .map((data, id) => {
              if (id === takeStorageType().length - 1) {
                return;
              }
              return (
                <p key={id}>
                  {trimData(data.storage) +
                    " " +
                    takeStorageType()[takeStorageType().length - 1].size}
                </p>
              );
            })}
        </div>
        <div className="price">
          <p>Price</p>
          {takeStorageType()
            .slice(0, maxComp)
            .map((data, id) => {
              if (id === takeStorageType().length - 1) {
                return;
              }
              return (
                <p key={id}>
                  {activePrice === "permo" &&
                    trimData(data.pricePerMo) +
                      " " +
                      takeStorageType()[takeStorageType().length - 1].currency}
                  {activePrice === "perho" &&
                    data.pricePerHour +
                      " " +
                      takeStorageType()[takeStorageType().length - 1].currency}
                </p>
              );
            })}
        </div>
      </div>

      <div className="next-actions">
        {maxComp > 5 && (
          <button onClick={() => setMaxComp(5)}>Less data</button>
        )}
        {checkAndRemoveActions() && (
          <>
            <button onClick={() => setMaxComp(maxComp + 5)}>Next 5 data</button>
            <button onClick={() => setMaxComp(maxComp + 50)}>Next 50</button>
          </>
        )}
        {!checkAndRemoveActions() && <p>You have everything!</p>}
      </div>
    </div>
  );
};

export default Storage;
