import axios from "axios";

export const API = axios.create({
  baseURL: "http://15.165.143.16:8080",
  headers: {
    "Content-Type": "application/json"
  }
});
