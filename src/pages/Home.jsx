import React from "react";
import Main from "../components/Main";
import Side from "../components/Side";
import { ActiveProvider } from "../context/ActiveProvider";
import { IsLoadingProvider } from "../context/IsLoading";
import { DefaultCompProvider } from "../context/DefaultCompType";

const Home = () => {
  const providersData = [
    {
      name: "linode",
      id: 1,
      color: "linear-gradient(to right, #8e2de2, #4a00e0)",
    },
    {
      name: "aws",
      id: 2,
      color: "linear-gradient(to right, #ff416c, #ff4b2b)",
    },
    {
      name: "gcp",
      id: 3,
      color: " linear-gradient(to right, #000428, #004e92)",
    },
    {
      name: "azure",
      id: 4,
      color: "linear-gradient(to right, #659999, #f4791f)",
    },

    {
      name: "digital Ocn",
      id: 5,
      color: "linear-gradient(to right, #396afc, #2948ff)",
    },
    {
      name: "ovh cloud",
      id: 6,
      color: "linear-gradient(to right, #59c173, #a17fe0, #5d26c1)",
    },
    {
      name: "vultr",
      id: 7,
      color: "linear-gradient(to right, #4e54c8, #8f94fb)",
    },
  ];

  return (
    <div className="container">
      <ActiveProvider>
        <IsLoadingProvider>
          <DefaultCompProvider>
            <Main />
            <Side />
          </DefaultCompProvider>
        </IsLoadingProvider>
      </ActiveProvider>
    </div>
  );
};

export default Home;
