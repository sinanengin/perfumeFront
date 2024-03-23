import { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.css"
      />
      <header className="header">
        <a href="#" className="logo">
          <p>Parfüm</p>
        </a>
        <nav className="navbar">
          <Link to="/">Ana Sayfa</Link>
          <Link to="/urunler">Ürünler</Link>
          <Link to="/cok-satanlar">En Çok Satan</Link>
          <Link to="/iletisim">İletişim</Link>
          <form
            onSubmit={() => {
              navigate(`/urunler/arama/${keyword}`);
            }}
            className="search-bar"
          >
            <input
              type="text"
              placeholder="Arama kelimelerinizi girin"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value.toString())}
            />
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
          </form>
        </nav>
      </header>
    </div>
  );
};
