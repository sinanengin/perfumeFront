import "./Homepage.css";
import { Carousel } from "./components/Carousel";
import { Header } from "./components/Header";

export const Homepage = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <div className="container"></div>
    </div>
  );
};
