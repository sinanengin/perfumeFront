import React from "react";
import ProductModel from "../../../../Models/ProductModel";
import "../Products.css";

export const ProductCard: React.FC<{ product: ProductModel }> = (props) => {
  return (
    <div>
      <div className="box">
        <img src={props.product.imageUrl} alt="Ürün Fotoğrafı" />
        <h4>{props.product.productBrandName}</h4>
        <h4>{props.product.productName}</h4>
        <h5>{props.product.productPrice}</h5>
        <div className="cart">
          <a href="#">
            <i className="bx bx-cart"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
