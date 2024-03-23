import "./Homepage.css";
import { Carousel } from "./components/Carousel";
import GenderSelect from "./components/GenderSelect";
import { Header } from "./components/Header";

export const Homepage = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <GenderSelect />

      <div className="container"></div>
    </div>
  );
};
