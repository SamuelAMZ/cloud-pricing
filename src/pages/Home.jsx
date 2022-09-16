import React from "react";
import Main from "../components/Main";
import Side from "../components/Side";
import { ActiveProvider } from "../context/ActiveProvider";
import { IsLoadingProvider } from "../context/IsLoading";
import { DefaultCompProvider } from "../context/DefaultCompType";
import { PricetypeProvider } from "../context/PriceType";

const Home = () => {
  return (
    <div className="container">
      <ActiveProvider>
        <IsLoadingProvider>
          <DefaultCompProvider>
            <PricetypeProvider>
              <Main />
              <Side />
            </PricetypeProvider>
          </DefaultCompProvider>
        </IsLoadingProvider>
      </ActiveProvider>
    </div>
  );
};

export default Home;
