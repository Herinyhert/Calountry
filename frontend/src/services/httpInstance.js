import axios from "axios";
const API_URL = process.env.VUE_APP_API_URL;

const httpInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "content-type": "application/json",
  },
});

export { httpInstance };
