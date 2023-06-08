import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://192.168.18.3:3333/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});
