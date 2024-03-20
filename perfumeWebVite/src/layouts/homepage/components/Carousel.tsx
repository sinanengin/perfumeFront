import React, { useEffect, useState } from "react";
import ProductModel from "../../../Models/ProductModel";
import { ProductService } from "../../../Services/ProductService";
import RecommendedPerfume from "./RecommendedPerfume";

export const Carousel = () => {
  const [perfume, setPerfume] = useState<ProductModel[]>([]);
  useEffect(() => {
    const getPerfume = async () => {
      const response = await ProductService.getByProductIsBestSeller();
      console.log(response.data);
      const perfumes: ProductModel[] = [];

      for (const key in response.data) {
        perfumes.push({
          productId: response.data[key].productId,
          productName: response.data[key].productName,
          productPrice: response.data[key].productData,
          productDescription: response.data[key].productDescription,
          productIsBestSeller: response.data[key].productIsBestSeller,
          productStockAmount: response.data[key].productStockAmount,
          imageUrl: response.data[key].productImageUrl,
        });
      }

      setPerfume(perfumes);
      console.log(perfumes);
    };
    getPerfume();
  }, []);
  return (
    <div className="container mt-5" style={{ height: 550 }}>
      <div className="homepage-carousel-title">
        <h3>En Çok Satan Parfümler</h3>
      </div>
      <div
        id="carouselExampleControls"
        className="carousel carousel-dark slide mt-5 
              d-none d-lg-block"
        data-bs-interval="false"
      >
        {/* Desktop */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row d-flex justify-content-center align-items-center">
              {perfume.slice(0, 3).map((product) => (
                <RecommendedPerfume product={product} key={product.productId} />
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row d-flex justify-content-center align-items-center">
              {perfume.slice(3, 6).map((product) => (
                <RecommendedPerfume product={product} key={product.productId} />
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row d-flex justify-content-center align-items-center">
              {perfume.slice(6, 9).map((product) => (
                <RecommendedPerfume product={product} key={product.productId} />
              ))}
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};
