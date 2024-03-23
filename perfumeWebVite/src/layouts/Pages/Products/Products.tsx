/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import "./Products.css";
import ProductModel from "../../../Models/ProductModel";
import { useParams } from "react-router-dom";
import { ProductService } from "../../../Services/ProductService";
import { ProductCard } from "./components/ProductCard";
import { CategoryService } from "../../../Services/CategoryService";
import CategoryModel from "../../../Models/CategoryModel";
import VolumeModel from "../../../Models/VolumeModel";
import BrandModel from "../../../Models/BrandModel";
import { BrandService } from "../../../Services/BrandService";
import { VolumeService } from "../../../Services/VolumeService";
import { Pagination } from "../../utils/Pagination";
import "./Products.css";

export const Products = () => {
  const [categories, setCategories] = useState<CategoryModel[]>([]);
  const [volumes, setVolumes] = useState<VolumeModel[]>([]);
  const [brands, setBrands] = useState<BrandModel[]>([]);
  const [products, setProducts] = useState<ProductModel[]>([]);
  const currentUrl = window.location.href;
  const [brandId, setbrandId] = useState<number>(0);
  const [volumeId, setvolumeId] = useState<number>(0);
  const [genderId, setGenderId] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(4);
  const [totalAmountProducts, setTotalAmountProducts] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const params = useParams();
  const { keyword } = params;
  const { categoryId } = params;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
    fetchFilter();
  }, [currentPage, volumeId, brandId, genderId, categoryId]);

  async function fetchFilter() {
    const responseCategory = await CategoryService.getAllCategories();
    const responseBrand = await BrandService.getAllBrands();
    const responseVolume = await VolumeService.getAllVolumes();

    const categories: CategoryModel[] = [];
    for (const key in responseCategory.data) {
      categories.push({
        categoryId: responseCategory.data[key].categoryId,
        categoryName: responseCategory.data[key].categoryName,
      });
    }
    setCategories(categories);
    const volumes: VolumeModel[] = [];
    for (const key in responseVolume.data) {
      volumes.push({
        volumeId: responseVolume.data[key].volumeId,
        volumeName: responseVolume.data[key].volume,
      });
    }
    setVolumes(volumes);
    const brands: BrandModel[] = [];
    for (const key in responseBrand.data) {
      brands.push({
        brandId: responseBrand.data[key].brandId,
        brandName: responseBrand.data[key].brandName,
      });
    }
    setBrands(brands);
  }
  async function fetchProduct() {
    if (currentUrl.includes("arama")) {
      const response = await ProductService.getByNameContainsKeyword(
        keyword,
        productsPerPage,
        currentPage - 1
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
        currentPage - 1
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
        currentPage - 1
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 border">
            <div className="container-fluid p-3 mt-3 border">
              <div>
                <h5 className="text-center">Markalar</h5>
                {brands.map((brand) => (
                  <div>
                    <input
                      type="radio"
                      id={brand.brandName}
                      name="brand"
                      value={brand.brandId}
                      onChange={handleBrandChange}
                    />
                    <label htmlFor={brand.brandName}>
                      &emsp; {brand.brandName}
                    </label>
                    <br />
                  </div>
                ))}
              </div>
            </div>
            <div className="container-fluid p-3 mt-3 border">
              <div>
                <h5 className="text-center">Kategoriler</h5>
                <ul className="list-group list-group-flush border-bottom">
                  {categories.map((category) => (
                    <li className="list-group-item">
                      <a
                        href={`/urunler/kategoriler/${category.categoryId}`}
                        className="text-dark"
                      >
                        {category.categoryName}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="container-fluid p-3 mt-3 border">
              <h5 className="text-center">Hacim</h5>
              {volumes.map((volume) => (
                <div>
                  <input
                    type="radio"
                    id={volume.volumeName}
                    name="volume"
                    value={volume.volumeId}
                    onChange={handleVolumeChange}
                  />
                  <label htmlFor={volume.volumeName}>
                    &emsp; {volume.volumeName}
                  </label>
                  <br />
                </div>
              ))}
            </div>
            <div className="container-fluid p-3 mt-3 mb-3 border">
              <h5 className="text-center">Cinsiyet</h5>
              <div>
                <input
                  type="radio"
                  id="yok"
                  name="gender"
                  value=""
                  onChange={handleGenderChange}
                />
                <label htmlFor="yok">&emsp; Yok</label>
                <br />

                <input
                  type="radio"
                  id="erkek"
                  name="gender"
                  value="1"
                  onChange={handleGenderChange}
                />
                <label htmlFor="erkek">&emsp; Erkek</label>
                <br />
                <input
                  type="radio"
                  id="kadın"
                  name="gender"
                  value="2"
                  onChange={handleGenderChange}
                />
                <label htmlFor="kadın">&emsp; Kadın</label>
                <br />

                <input
                  type="radio"
                  id="unisex"
                  name="gender"
                  value="3"
                  onChange={handleGenderChange}
                />
                <label htmlFor="unisex">&emsp; Unisex</label>
                <br />
              </div>
            </div>
          </div>
          <div className="col-10">
            <div className="container-fluid p-3">
              {products ? (
                products.map((product) => (
                  <ProductCard product={product} key={product.productId} />
                ))
              ) : (
                <div>
                  Bu özelliklere ve bu isme sahip bir ürün bulunamadı...
                </div>
              )}
            </div>
          </div>
          <div className="col-12">
            <div className="container d-flex justify-content-center align-items-center">
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  paginate={paginate}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
