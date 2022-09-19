import React, { useState, useContext, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaAws, FaLinode, FaDigitalOcean } from "react-icons/fa";
import { SiGooglecloud, SiOvh, SiVultr } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import ActiveProviderContext from "../../context/ActiveProvider";
import DefaultDatabaseContext from "../../context/DefaultDatabaseType";

const Database = ({ providerdata, trimData }) => {
  const { active } = useContext(ActiveProviderContext);
  const { defaultDatabase, changeDefaultDatabase } = useContext(
    DefaultDatabaseContext
  );

  const [pricetype, setPricetype] = useState("permo");

  // // handle type of computer changes from select
  const [typeOfDatabase, setTypeOfDatabase] = useState(defaultDatabase);
  const takeDatabaseType = () => {
    if (typeOfDatabase === "postgres") {
      return providerdata.database.postgres;
    }
    if (typeOfDatabase === "mysql") {
      return providerdata.database.mysql;
    }
    if (typeOfDatabase === "mongo") {
      return providerdata.database.mongo;
    }
  };

  // handle the displaying of a max of 5 data on the first load
  const [maxComp, setMaxComp] = useState(5);
  const checkAndRemoveActions = () => {
    const check = maxComp >= takeDatabaseType().length - 1;
    return !check;
  };

  useEffect(() => {
    // set the default computer type to "general purposes"
    setTypeOfDatabase("postgres");
    // change price type
    if (active.pricePerMo.database) {
      setPricetype("permo");
    }
    if (active.pricePerHo.database) {
      setPricetype("perho");
    }
    // reset the mexcomp to 5 every load of the component
    setMaxComp(5);
  }, [active]);

  return (
    <div className="computer">
      <div className="title">
        <h3>Database data</h3>

        <div className="details">
          <form id="typeofdatabase">
            <select onChange={(e) => setTypeOfDatabase(e.target.value)}>
              <option value="postgres">Postgres</option>
              <option value="mysql">Mysql</option>
              <option value="mongo">MongoDB</option>
            </select>
          </form>
          <form id="typeofprice">
            <select name="price" onChange={(e) => setPricetype(e.target.value)}>
              {pricetype === "permo" && (
                <option value="permo">Price Per Month</option>
              )}
              {pricetype === "perho" && (
                <option value="perho">Price Per Hour</option>
              )}
            </select>
          </form>
        </div>
      </div>

      <div className="data datadatabase">
        <div className="logo">
          <p>Company</p>
          {takeDatabaseType()
            .slice(0, maxComp)
            .map((data, id) => {
              if (id === takeDatabaseType().length - 1) {
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
          {takeDatabaseType()
            .slice(0, maxComp)
            .map((data, id) => {
              if (id === takeDatabaseType().length - 1) {
                return;
              }
              return <p key={id}>{data.title} </p>;
            })}
        </div>
        <div className="size">
          <p>Size</p>
          {takeDatabaseType()
            .slice(0, maxComp)
            .map((data, id) => {
              if (id === takeDatabaseType().length - 1) {
                return;
              }
              return (
                <p key={id}>
                  {trimData(data.size) +
                    " " +
                    takeDatabaseType()[takeDatabaseType().length - 1].size}
                </p>
              );
            })}
        </div>
        <div className="price">
          <p>Price</p>
          {takeDatabaseType()
            .slice(0, maxComp)
            .map((data, id) => {
              if (id === takeDatabaseType().length - 1) {
                return;
              }
              return (
                <p key={id}>
                  {pricetype === "permo" &&
                    trimData(data.pricePerMo) +
                      " " +
                      takeDatabaseType()[takeDatabaseType().length - 1]
                        .currency}
                  {pricetype === "perho" &&
                    data.pricePerHour +
                      " " +
                      takeDatabaseType()[takeDatabaseType().length - 1]
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

export default Database;
