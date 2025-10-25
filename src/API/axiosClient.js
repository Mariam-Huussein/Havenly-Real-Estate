import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://havenly-real-estate-api.runasp.net/api",

});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Unauthorized - maybe token expired?");
      localStorage.removeItem("token");

      window.location.href = "/login"; 
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
