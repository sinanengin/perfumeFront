import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          <Routes>
            <Route path="" element={<Homepage />} />
            <Route path="/urunler" element={<Products />} />
            <Route path="/product-detail/:id" element={<ProductDetail />} />
            <Route
              path="/urunler/kategoriler/:categoryId"
              element={<Products />}
            />
            <Route path="/urunler/arama/:keyword" element={<Products />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
