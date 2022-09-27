import AboutInfo from "../components/AboutInfo";
import { MenuActiveProvider } from "../context/MenuActive";

const About = () => {
  return (
    <MenuActiveProvider>
      <div className="about">
        <AboutInfo />
      </div>
    </MenuActiveProvider>
  );
};

export default About;
