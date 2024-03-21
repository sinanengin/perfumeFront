import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Navbar } from "./layouts/Navbar/Navbar";
import { Homepage } from "./layouts/Homepage/Homepage";
import { Products } from "./layouts/Pages/Products/Products";
import { ProductDetail } from "./layouts/Pages/ProductDetail/ProductDetail";

function App() {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Homepage />
          <Products />
          <ProductDetail />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
