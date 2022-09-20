import Main from "../components/Main";
import Side from "../components/Side";
import { ActiveProvider } from "../context/ActiveProvider";
import { IsLoadingProvider } from "../context/IsLoading";
import { DefaultCompProvider } from "../context/DefaultCompType";
import { DefaultDatabaseProvider } from "../context/DefaultDatabaseType";
import { PricetypeProvider } from "../context/PriceType";
import { MoreActiveProvider } from "../context/MoreIsActive";
import { CurrentActiveProviderIdProvider } from "../context/CurrentActiveProviderId";
import { DownloadActiveProvider } from "../context/DownloadIsActive";
import { MenuActiveProvider } from "../context/MenuActive";
import { AllProvidersProvider } from "../context/AllProviders";

const Home = () => {
  return (
    <div className="container">
      <AllProvidersProvider>
        <ActiveProvider>
          <IsLoadingProvider>
            <DefaultCompProvider>
              <DefaultDatabaseProvider>
                <PricetypeProvider>
                  <MoreActiveProvider>
                    <CurrentActiveProviderIdProvider>
                      <DownloadActiveProvider>
                        <MenuActiveProvider>
                          <Main />
                          <Side />
                        </MenuActiveProvider>
                      </DownloadActiveProvider>
                    </CurrentActiveProviderIdProvider>
                  </MoreActiveProvider>
                </PricetypeProvider>
              </DefaultDatabaseProvider>
            </DefaultCompProvider>
          </IsLoadingProvider>
        </ActiveProvider>
      </AllProvidersProvider>
    </div>
  );
};

export default Home;
