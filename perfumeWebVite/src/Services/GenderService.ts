import axios from "axios";

export const GenderService = {
  getAllGenders: async () => {
    try {
      const baseurl = "http://localhost:8080/api/genders";
      const response = await axios.get(baseurl);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  },
};
