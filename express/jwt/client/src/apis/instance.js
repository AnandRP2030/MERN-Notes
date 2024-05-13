import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:3443/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("power-token") || null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;  
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;