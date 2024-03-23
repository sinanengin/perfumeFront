import React from "react";

function GenderSelect() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <a href="/urunler">
            <img
              src="https://static.ticimax.cloud/cdn-cgi/image/width=941,quality=85,format=webp/51735/uploads/sayfatasarim/sayfa3/selective-kadin-08e5.jpg"
              alt="First Image"
              className="img-fluid"
            />
          </a>
        </div>
        <div className="col">
          <a href="/urunler">
            <img
              src="https://static.ticimax.cloud/cdn-cgi/image/width=941,quality=85,format=webp/51735/uploads/sayfatasarim/sayfa3/selective-erkek-96c4.jpg"
              alt="Second Image"
              className="img-fluid"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default GenderSelect;
