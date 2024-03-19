import axios from "axios";

export const CategoryService = {
  getAllCategories: async () => {
    try {
      const baseurl = "http://localhost:8080/api/categories";
      const response = await axios.get(baseurl);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  },
};
