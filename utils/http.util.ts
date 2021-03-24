import axios, { AxiosInstance } from "axios";

const AUTH_HEADER = "Authorization";

let axiosInstance: AxiosInstance;

axiosInstance = axios.create({
  baseURL: process.env.apiEndpoint,
  withCredentials: true,
});

export const get = async <Res>(url: string, params?: any): Promise<Res> => {
  const result = await axiosInstance.get(url, { params });
  return result.data;
};

export const post = async <Req, Res>(
  url: string,
  data?: Req,
  params?: any
): Promise<Res> => {
  const result = await axiosInstance.post(url, data, { params });
  return result.data;
};

export const put = async <Req, Res>(
  url: string,
  data?: Req,
  params?: any
): Promise<Res> => {
  const result = await axiosInstance.put(url, data, { params });
  return result.data;
};

export const del = async <Res>(url: string, params?: any): Promise<Res> => {
  const result = await axiosInstance.delete(url, { params });
  return result.data;
};

export const removeAuthHeader = (): void => {
  delete axiosInstance.defaults.headers.common[AUTH_HEADER];
};

export const setAuthHeader = (value: string): void => {
  axiosInstance.defaults.headers.common[AUTH_HEADER] = value;
};

export const setRequestInterceptor = ({ handler, errorHandler }) => {
  axiosInstance.interceptors.request.use(handler, errorHandler);
};

export const setResponseInterceptor = ({ handler, errorHandler }) => {
  axiosInstance.interceptors.response.use(handler, errorHandler);
};
