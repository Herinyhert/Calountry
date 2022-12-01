import axios from "axios";
import store from "../store/index";
const API_URL = process.env.VUE_APP_API_URL;

const httpInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "content-type": "application/json",
  },
});

httpInstance.interceptors.request.use(
  function (config) {
    const token = "Bearer " + store.state.auth.profile.token;
    config.headers["Authorization"] = token || "";
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export { httpInstance };
