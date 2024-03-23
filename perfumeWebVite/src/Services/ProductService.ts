/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export const ProductService = {
  getAll: async (
    volumeId: any,
    brandId: any,
    categoryId: any,
    genderId: any,
    pageSize: number,
    pageNo: number
  ) => {
    let baseurl: string = `http://localhost:8080/api/products?`;
    if (volumeId) {
      baseurl = baseurl + `volumeId=${volumeId}&`;
    }
    if (brandId) {
      baseurl = baseurl + `brandId=${brandId}&`;
    }
    if (categoryId) {
      baseurl = baseurl + `categoryId=${categoryId}&`;
    }
    if (genderId) {
      baseurl = baseurl + `genderId=${genderId}&`;
    }
    try {
      const response = await axios.get(
        baseurl + `pageSize=${pageSize}&pageNo=${pageNo}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  },

  getByProductIsBestSeller: async () => {
    try {
      const baseurl = "http://localhost:8080/api/products/bestseller";
      const response = await axios.get(baseurl);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  },

  getByNameContainsKeyword: async (
    keyword: any,
    pageSize: number,
    pageNo: number
  ) => {
    const baseurl: string = `http://localhost:8080/api/products/search/${keyword}`;

    try {
      const response = await axios.get(
        baseurl + `?pageSize=${pageSize}&pageNo=${pageNo}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  },
};
