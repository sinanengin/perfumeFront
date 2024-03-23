import React from "react";
import ProductModel from "../../../../Models/ProductModel";
import "../Products.css";

export const ProductCard: React.FC<{ product: ProductModel }> = (props) => {
  return (
    <div className="col-md-4 box ">
      <div className="card card-width">
        <a href={`/products/${props.product.productId}`}>
          <img
            className="card-img-top"
            src={props.product.imageUrl}
            alt="Card image cap"
          />
        </a>
        <div className="card-body">
          <p>{props.product.productName}</p>
          <p className="card-text text-muted">
            {props.product.productDescription}
          </p>
          <p className="card-text roboto-bold">{props.product.productPrice}</p>
        </div>
      </div>
    </div>
  );
};
