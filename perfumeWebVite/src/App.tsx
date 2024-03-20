import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Navbar } from "./layouts/Navbar/Navbar";
import { Homepage } from "./layouts/Homepage/Homepage";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Homepage />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
