import axios from "axios";

const REACT_APP_APP_URL = "https://jsonplaceholder.typicode.com";

const axiosApi = axios.create({
  baseURL: REACT_APP_APP_URL,
});

axios.interceptors.request.use(function (config) {
  return config;
});

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export async function get(url: string, config?: any) {
  return await axiosApi
    .get(url, {
      ...config,
      headers: {
        // Accept: "application/json, text/plain, */*",
        // "Access-Control-Expose-Headers": "x-total-count",
        "content-type": "application/json; charset=utf-8",
      },
    })
    .then((response) => response.data);
}
