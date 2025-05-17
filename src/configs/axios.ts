import a from "axios";
import * as urls from "./urls";
import Cookies from "js-cookie";

const axios = a.create({
  url: urls.API_ADDRESS,
  headers: { "Content-Type": "application/json" },
});

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    const TOKEN = Cookies.get("TOKEN");
    if (TOKEN) {
      config.headers["Authorization"] = `Bearer ${TOKEN}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    // return to login page if status is 401
    if (error.response.status === 401) {
      Cookies.remove("TOKEN");
      window.location.href = "/login";
    }

    // redirect to access-denied page if status is 403

    // if (error.response.status === 403) {
    //   window.location.href = "/access-denied";
    // }

    return Promise.reject(error);
  }
);

export default axios;