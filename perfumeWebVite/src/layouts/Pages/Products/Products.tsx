/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import "./Products.css";
import { Filter } from "./components/Filter";
import ProductModel from "../../../Models/ProductModel";
import { useParams } from "react-router-dom";
import { ProductService } from "../../../Services/ProductService";
import { ProductCard } from "./components/ProductCard";

export const Products = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const currentUrl = window.location.href;
  const [brandId, setbrandId] = useState<number>(0);
  const [volumeId, setvolumeId] = useState<number>(0);
  const [genderId, setGenderId] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(20);
  const [totalAmountProducts, setTotalAmountProducts] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const params = useParams();
  const { keyword } = params;
  const { categoryId } = params;

  const handleVolumeChange = (event: any) => {
    const volumeId = event.target.value;
    setvolumeId(volumeId);
  };

  const handleGenderChange = (event: any) => {
    const selectedGender = event.target.value;
    setGenderId(selectedGender);
  };

  const handleBrandChange = (event: any) => {
    const selectedBrand = event.target.value;
    setbrandId(selectedBrand);
  };

  useEffect(() => {
    fetchProduct();
  }, [currentPage, volumeId, brandId, genderId, categoryId]);
  async function fetchProduct() {
    if (currentUrl.includes("arama")) {
      const response = await ProductService.getByNameContainsKeyword(
        keyword,
        productsPerPage,
        currentPage
      );

      setTotalAmountProducts(response.data.totalCount);
      setTotalPages(response.data.totalPage);
      const products: ProductModel[] = [];
      for (const key in response.data.content) {
        products.push({
          productId: response.data.content[key].productId,
          productName: response.data.content[key].productName,
          productStockAmount: response.data.content[key].productStockAmount,
          productIsBestSeller: response.data.content[key].productIsBestSeller,
          productPrice: response.data.content[key].productPrice,
          productDescription: response.data.content[key].productDescription,
          imageUrl: response.data.content[key].productImageUrl,
          productBrandName: response.data.content[key].brand.brandName,
        });
      }
      console.log(products);
      setProducts(products);
    } else if (currentUrl.includes("kategoriler")) {
      const response = await ProductService.getAll(
        volumeId,
        brandId,
        categoryId,
        genderId,
        productsPerPage,
        currentPage
      );

      setTotalAmountProducts(response.data.totalCount);
      setTotalPages(response.data.totalPage);
      const products: ProductModel[] = [];
      for (const key in response.data.content) {
        products.push({
          productId: response.data.content[key].productId,
          productName: response.data.content[key].productName,
          productStockAmount: response.data.content[key].productStockAmount,
          productIsBestSeller: response.data.content[key].productIsBestSeller,
          productPrice: response.data.content[key].productPrice,
          productDescription: response.data.content[key].productDescription,
          imageUrl: response.data.content[key].productImageUrl,
          productBrandName: response.data.content[key].brand.brandName,
        });
      }
      console.log(products);
      setProducts(products);
    } else {
      const response = await ProductService.getAll(
        volumeId,
        brandId,
        categoryId,
        genderId,
        productsPerPage,
        currentPage
      );

      setTotalAmountProducts(response.data.totalCount);
      setTotalPages(response.data.totalPage);
      const products: ProductModel[] = [];
      for (const key in response.data.content) {
        products.push({
          productId: response.data.content[key].productId,
          productName: response.data.content[key].productName,
          productStockAmount: response.data.content[key].productStockAmount,
          productIsBestSeller: response.data.content[key].productIsBestSeller,
          productPrice: response.data.content[key].productPrice,
          productDescription: response.data.content[key].productDescription,
          imageUrl: response.data.content[key].productImageUrl,
          productBrandName: response.data.content[key].brand.brandName,
        });
      }
      console.log(products);
      setProducts(products);
    }
  }

  return (
    <div>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      ></link>
      <div className="text-center">Search Bar</div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 border" style={{ height: "100px" }}>
            <Filter />
          </div>
          <div className="col-10 border">
            {products.map((product) => (
              <ProductCard product={product} key={product.productId} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
