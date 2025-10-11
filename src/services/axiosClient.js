// src/services/axiosClient.js
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://havenly-real-estate-api.runasp.net/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// لو فيه token متخزن، ضيفيه في كل الطلبات تلقائيًا
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosClient;
