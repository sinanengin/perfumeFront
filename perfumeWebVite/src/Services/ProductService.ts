import axios from "axios";

export const ProductService = {
  getAll: async (
    volumeId: number,
    brandId: number,
    categoryId: number,
    genderId: number
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
      baseurl = baseurl + `genderId=${genderId}`;
    }
    try {
      const response = await axios.get(baseurl);
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
};
