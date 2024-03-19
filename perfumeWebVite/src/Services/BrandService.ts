import axios from "axios";

export const BrandService = {
  getAllBrands: async () => {
    try {
      const baseurl = "http://localhost:8080/api/brands";
      const response = await axios.get(baseurl);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  },
};
