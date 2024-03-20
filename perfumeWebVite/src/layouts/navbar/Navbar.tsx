import "./Navbar.css";

export const Navbar = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.css"
      />
      <header className="header">
        <a href="#" className="logo">
          Logo
        </a>

        <nav className="navbar">
          <a href="#">Ana Sayfa</a>
          <a href="#">Ürünler</a>
          <a href="#">Kategoriler</a>
          <a href="#">En Çok Satan</a>
          <a href="#">İletişim</a>
        </nav>
      </header>
    </div>
  );
};
