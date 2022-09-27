import ApiDoc from "../components/ApiDoc";
import { MenuActiveProvider } from "../context/MenuActive";

const Api = () => {
  return (
    <MenuActiveProvider>
      <div className="about">
        <ApiDoc />
      </div>
    </MenuActiveProvider>
  );
};

export default Api;
