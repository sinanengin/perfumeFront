import React, { useEffect, useState } from "react";
import ProductModel from "../../../Models/ProductModel";
import { ProductService } from "../../../Services/ProductService";
import RecommendedPerfume from "./RecommendedPerfume";

export const Carousel = () => {
  const [perfume, setPerfume] = useState<ProductModel[]>([]);

  useEffect(() => {
    const getPerfume = async () => {
      const response = await ProductService.getByProductIsBestSeller();
      const perfumes: ProductModel[] = response.data.map(
        (item: ProductModel) => ({
          productId: item.productId,
          productName: item.productName,
          productPrice: item.productPrice,
          productDescription: item.productDescription,
          productIsBestSeller: item.productIsBestSeller,
          productStockAmount: item.productStockAmount,
          imageUrl: item.productImageUrl,
        })
      );
      setPerfume(perfumes);
    };
    getPerfume();
  }, []);

  return (
    <div
      className="container-fluid mt-5"
      style={{ width: "100%", height: 450 }}
    >
      <h3 className="text-center mb-4">En Çok Satan Parfümler</h3>
      <div
        id="carouselExampleControls"
        className="carousel carousel-dark slide mt-5 d-none d-lg-block"
        data-bs-interval="false"
      >
        <div className="carousel-inner">
          {perfume.length > 0 &&
            [0, 1, 2].map((index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="row d-flex justify-content-center align-items-center">
                  {perfume.slice(index * 3, (index + 1) * 3).map((product) => (
                    <RecommendedPerfume
                      product={product}
                      key={product.productId}
                    />
                  ))}
                </div>
              </div>
            ))}
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
          <span className="visually-hidden">Geri</span>
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
          <span className="visually-hidden">İleri</span>
        </button>
      </div>
    </div>
  );
};
