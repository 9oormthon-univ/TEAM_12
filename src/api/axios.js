import axios from "axios";

const REACT_APP_GOORM_API = 'http://15.165.143.16:8080'

export const API = axios.create({
  // baseURL: import.meta.env.REACT_APP_GOORM_API,
  baseURL: REACT_APP_GOORM_API,
  headers: {
    "Content-Type": "application/json"
  }
});
