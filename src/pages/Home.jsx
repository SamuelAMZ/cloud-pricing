import React from "react";
import Main from "../components/Main";
import Side from "../components/Side";
import { ActiveProvider } from "../context/ActiveProvider";
import { IsLoadingProvider } from "../context/IsLoading";
import { DefaultCompProvider } from "../context/DefaultCompType";
import { PricetypeProvider } from "../context/PriceType";
import { MoreActiveProvider } from "../context/MoreIsActive";
import { CurrentActiveProviderIdProvider } from "../context/CurrentActiveProviderId";

const Home = () => {
  return (
    <div className="container">
      <ActiveProvider>
        <IsLoadingProvider>
          <DefaultCompProvider>
            <PricetypeProvider>
              <MoreActiveProvider>
                <CurrentActiveProviderIdProvider>
                  <Main />
                  <Side />
                </CurrentActiveProviderIdProvider>
              </MoreActiveProvider>
            </PricetypeProvider>
          </DefaultCompProvider>
        </IsLoadingProvider>
      </ActiveProvider>
    </div>
  );
};

export default Home;
