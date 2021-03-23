import axios, { AxiosInstance, AxiosResponse } from "axios";

interface HttpUtilOption {
  resHandler?: (
    value: AxiosResponse<any>
  ) => AxiosResponse<any> | Promise<AxiosResponse<any>>;
  resErrorHandler?: (error: any) => any;
  reqHandler?: (value: any) => any;
  reqErrorHandler?: (error: any) => any;
}

export default class HttpUtil {
  private axiosInstance: AxiosInstance;

  constructor(options?: HttpUtilOption) {
    const {
      resHandler,
      resErrorHandler,
      reqHandler,
      reqErrorHandler,
    } = options;

    this.axiosInstance = axios.create({
      baseURL: process.env.apiEndpoint,
      withCredentials: true,
    });

    if (resHandler) {
      this.axiosInstance.interceptors.response.use(resHandler, resErrorHandler);
    }
    if (reqHandler) {
      this.axiosInstance.interceptors.request.use(reqHandler, reqErrorHandler);
    }
  }

  async get<Res>(url: string, params?: any): Promise<Res> {
    const result = await this.axiosInstance.get(url, { params });
    return result.data;
  }

  async post<Req, Res>(url: string, data?: Req, params?: any): Promise<Res> {
    const result = await this.axiosInstance.post(url, data, { params });
    return result.data;
  }

  async put<Req, Res>(url: string, data?: Req, params?: any): Promise<Res> {
    const result = await this.axiosInstance.put(url, data, { params });
    return result.data;
  }

  async delete<Res>(url: string, params?: any): Promise<Res> {
    const result = await this.axiosInstance.delete(url, { params });
    return result.data;
  }

  removeAuthHeader(): void {
    delete this.axiosInstance.defaults.headers.common["Authorization"];
  }

  setAuthHeader(value: string): void {
    this.axiosInstance.defaults.headers.common["Authorization"] = value;
  }
}
