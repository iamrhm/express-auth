import axios from "axios";

import { toCamelCaseObject, toSnakeCaseObject } from "./normalize";
import { urls } from "constants/app.config";

const api = (options: any): any => {
  const normalizedOptions = {
    ...options,
    mode: "no-cors",
    headers: {
      ...options.headers,
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    },
    data: { ...toSnakeCaseObject(options.data) }
  };

  const axiosInstance = axios.create({
    baseURL: urls.base(),
    headers: {
      ...normalizedOptions.headers
    },
    data: { ...normalizedOptions.data }
  });

  function onSuccess(response: any): any {
    return toCamelCaseObject(response);
  }

  function onError(error: any): any {
    if (axios.isCancel(error)) {
      return null;
    }
    return Promise.reject(toCamelCaseObject(error));
  }

  return axiosInstance(normalizedOptions).then(onSuccess).catch(onError);
};

export default api;
