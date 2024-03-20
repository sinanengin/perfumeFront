import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Navbar } from "./layouts/Navbar/Navbar";
import { Homepage } from "./layouts/Homepage/Homepage";
import { Products } from "./layouts/Pages/Products/Products";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Homepage />
          <Products />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
