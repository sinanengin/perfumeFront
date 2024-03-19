import axios from "axios";

export const VolumeService = {
  getAllVolumes: async () => {
    try {
      const baseurl = "http://localhost:8080/api/volumes";
      const response = await axios.get(baseurl);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  },
};
