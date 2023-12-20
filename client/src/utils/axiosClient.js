import axios from "axios";
import { KEY_ACCESS_TOKEN, getItem, removeItem } from "./localStorageManager";

export const axiosClient = axios.create({
  baseURL: "https://freecodecamp-assignment.onrender.com/",
  withCredentials: true,
  credentials: "include",
});

axiosClient.interceptors.request.use((request) => {
  const accessToken = getItem(KEY_ACCESS_TOKEN);
  request.headers["Authorization"] = `Bearer ${accessToken}`;
  return request;
});

axiosClient.interceptors.response.use(async (response) => {
  const data = response.data;
  if (data.status === "ok") {
    console.log("data status : ", data.status);
    return data;
  }

  const statusCode = data.statusCode;
  const error = data.error;

  if (statusCode === 401) {
    // when access token is expired, send user to login page
    console.log("expired");
    removeItem(KEY_ACCESS_TOKEN);
    window.location.replace("/login", "_self");
    return Promise.reject.error(error);
  }
});
