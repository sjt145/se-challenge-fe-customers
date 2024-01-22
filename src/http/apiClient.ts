import axios, {AxiosInstance, AxiosRequestConfig} from "axios";
import {SessionUtils} from "@/utils";

let apiClient: ApiClient | null = null;

export const configure = (baseUrl, errorHandlerFunction) => {
  apiClient = new ApiClient(baseUrl, errorHandlerFunction);
};

export const getApiClient = () => {
  if (!apiClient) throw new Error("api client is not initialized");
  return apiClient;
};

export const clearAuthToken = () => {
  delete axios.defaults.headers["authorization"];
};

export class ApiClient {
  axiosClient: AxiosInstance;
  errorHandlerFunction: (error: Error) => void;

  constructor(baseUrl, errorHandlerFunction) {
    this.axiosClient = axios.create({
      baseURL: baseUrl,
      //withCredentials: "include"
    });
    this.errorHandlerFunction = errorHandlerFunction;
  }

  static createHeaders(headers: any) {
    const authToken = SessionUtils.getAuthToken();
    if (!headers) {
      headers = {};
    }
    if (!headers.authorization && authToken) {
      headers.authorization = `Bearer ${authToken}`
    }
    return headers;
  };

  sendGetRequest(urlPath, headers, queryParams) {
    const config: AxiosRequestConfig = {
      params: queryParams,
      headers: ApiClient.createHeaders(headers)
    };
    return this.axiosClient.get(urlPath, config);
  }

  sendMediaStreamGetRequest(urlPath, headers, queryParams) {
    const config: AxiosRequestConfig = {
      params: queryParams,
      headers: ApiClient.createHeaders(headers),
      responseType: "arraybuffer"
    };
    return this.axiosClient.get(urlPath, config);
  }

  sendPostRequest(urlPath, headers, queryParams, data) {
    const config: AxiosRequestConfig = {
      params: queryParams,
      headers: ApiClient.createHeaders(headers)
    };
    return this.axiosClient.post(urlPath, data, config);
  }

  sendPutRequest(urlPath, headers, queryParams, data) {
    const config: AxiosRequestConfig = {
      params: queryParams,
      headers: ApiClient.createHeaders(headers)
    };
    return this.axiosClient.put(urlPath, data, config);
  }

  sendPatchRequest(urlPath, headers, queryParams, data) {
    const config: AxiosRequestConfig = {
      params: queryParams,
      headers: ApiClient.createHeaders(headers)
    };
    return this.axiosClient.patch(urlPath, data, config);
  }

  sendDeleteRequest(urlPath, headers, queryParams) {
    const config: AxiosRequestConfig = {
      params: queryParams,
      headers: ApiClient.createHeaders(headers)
    };
    return this.axiosClient.delete(urlPath, config);
  }

  sendFormDataRequest(urlPath, headers, queryParams, formdata) {
    const config: AxiosRequestConfig = {
      params: queryParams,
      headers: ApiClient.createHeaders(headers)
    };
    return this.axiosClient.post(urlPath, formdata, config);
  }

  handleError(error) {
    if (this.errorHandlerFunction) {
      this.errorHandlerFunction(error);
    }
  }
}
