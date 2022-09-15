import React from "react";

const SideBody = () => {
  const generalPurpose = [
    {
      title: "Nanode 1 GB",
      pricePerMo: "5",
      pricePerHour: "0.0075",
      ram: "1",
      cpu: "1",
      storage: "25",
      transfer: "1",
    },
    {
      title: "Linode 2 GB",
      pricePerMo: "10",
      pricePerHour: "0.015",
      ram: "2",
      cpu: "1",
      storage: "50",
      transfer: "2",
    },
    {
      title: "Linode 4 GB",
      pricePerMo: "20",
      pricePerHour: "0.03",
      ram: "4",
      cpu: "2",
      storage: "80",
      transfer: "4",
    },
    {
      title: "Linode 8 GB",
      pricePerMo: "40",
      pricePerHour: "0.06",
      ram: "8",
      cpu: "4",
      storage: "160",
      transfer: "5",
    },
    {
      title: "Linode 16 GB",
      pricePerMo: "80",
      pricePerHour: "0.12",
      ram: "16",
      cpu: "6",
      storage: "320",
      transfer: "8",
    },
    {
      title: "Linode 32 GB",
      pricePerMo: "160",
      pricePerHour: "0.24",
      ram: "32",
      cpu: "8",
      storage: "640",
      transfer: "16",
    },
    {
      title: "Linode 64 GB",
      pricePerMo: "320",
      pricePerHour: "0.48",
      ram: "64",
      cpu: "16",
      storage: "1280",
      transfer: "20",
    },
    {
      title: "Linode 96 GB",
      pricePerMo: "480",
      pricePerHour: "0.72",
      ram: "96",
      cpu: "20",
      storage: "1920",
      transfer: "20",
    },
    {
      title: "Linode 128 GB",
      pricePerMo: "640",
      pricePerHour: "0.96",
      ram: "128",
      cpu: "24",
      storage: "2560",
      transfer: "20",
    },
    {
      title: "Linode 192 GB",
      pricePerMo: "960",
      pricePerHour: "1.44",
      ram: "192",
      cpu: "32",
      storage: "3840",
      transfer: "20",
    },
    {
      type: "general purpose",
      currency: "USD",
      sizes: {
        cpu: "vcpu",
        storage: "GB",
        ram: "GB",
        transfer: "TB",
      },
    },
  ];

  return (
    <div className="content-container">
      <div className="computer">
        <div className="title">
          <h3>Computer data</h3>
          <div className="details">
            <p>Last Update - 2022-12-12</p>
            <form id="typeofprice">
              <select name="price">
                <option value="permo">Per Month</option>
                <option value="perho">Per Hour</option>
              </select>
            </form>
          </div>
        </div>

        <form>
          <select name="computer">
            <option value="general">general purpose</option>
            <option value="cpu">CPU optimized</option>
            <option value="ram">RAM optimized</option>
          </select>
        </form>
        <div className="data datacomputer">
          <div className="logo">
            <p>Company</p>
            {generalPurpose.map((data, id) => {
              if (id === generalPurpose.length - 1) {
                return;
              }
              return <p key={id}>logo</p>;
            })}
          </div>
          <div className="name">
            <p>name</p>
            {generalPurpose.map((data, id) => {
              if (id === generalPurpose.length - 1) {
                return;
              }
              return <p key={id}>{data.title} </p>;
            })}
          </div>
          <div className="cpu">
            <p>CPU</p>
            {generalPurpose.map((data, id) => {
              if (id === generalPurpose.length - 1) {
                return;
              }
              return (
                <p key={id}>
                  {data.cpu +
                    " " +
                    generalPurpose[generalPurpose.length - 1].sizes.cpu}
                </p>
              );
            })}
          </div>
          <div className="ram">
            <p>RAM</p>
            {generalPurpose.map((data, id) => {
              if (id === generalPurpose.length - 1) {
                return;
              }
              return (
                <p key={id}>
                  {data.ram +
                    " " +
                    generalPurpose[generalPurpose.length - 1].sizes.ram}
                </p>
              );
            })}
          </div>
          <div className="price">
            <p>Price</p>
            {generalPurpose.map((data, id) => {
              if (id === generalPurpose.length - 1) {
                return;
              }
              return (
                <p key={id}>
                  {data.pricePerMo +
                    " " +
                    generalPurpose[generalPurpose.length - 1].currency}
                </p>
              );
            })}
          </div>
        </div>
      </div>

      <div className="database">
        <h3>Database data</h3>
        <form>
          <select name="database">
            <option value="postgres">Postgres</option>
            <option value="mysql">MySQL</option>
            <option value="mongo">Mongo DB</option>
          </select>
        </form>
      </div>
      <div className="storage">
        <h3>Storage data</h3>
        <form>
          <select name="storage">
            <option value="block">Block Storage</option>
            <option value="object">Object Storage</option>
          </select>
        </form>
      </div>
      <div className="networking">
        <h3>Networking data</h3>
        <form>
          <select name="networking">
            <option value="nodebalancers">Node Balancers</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default SideBody;
