import React from "react";
import "./ProductDetail.css";

export const ProductDetail = () => {
  return (
    <div>
      <section className="container sproduct my-5 pt-5">
        <div className="row mt-5">
          <div className="col-lg-5 col-md-12 col-12">
            <img
              className="img-fluid w-100"
              src="https://www.sephora.com.tr/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw3b4dd6f0/images/hi-res/SKU/SKU_4/319180_swatch.jpg"
              alt="Blue De Chanel"
            />
          </div>

          <div className="col-lg-6 col-md-12 col-12">
            <h6>Home / Parfüm</h6>
            <h3 className="py-4">Blue De Chanel</h3>
            <h2>4500</h2>
            <input type="number" value={1} />
            <button className="buy-btn">
              <i>Sepete Ekle</i>
            </button>
            <h4 className="mt-5 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              praesentium tenetur possimus quibusdam repellendus autem
              asperiores nisi excepturi ullam, velit cumque quas voluptatem
              dolorum nam eligendi quaerat eveniet nostrum earum!
            </h4>
          </div>
        </div>
      </section>
    </div>
  );
};
