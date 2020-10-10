import axios, {
  AxiosRequestConfig,
  AxiosInstance,
  AxiosResponse,
  AxiosError
} from 'axios';

const defaultRequestInterceptors = (cfg: AxiosRequestConfig) => cfg;
const defaultResponseInterceptors = (response: AxiosResponse) => response;
const defaultErrorInterceptors = (err: AxiosError) => Promise.reject(err);

interface IHTTPOptions {
  requestInterceptors?: (cfg: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig>;
  responseInterceptors?: (response: AxiosResponse) => AxiosResponse;
  errorInterceptors?: (err: AxiosError) => Promise<any>;
}

interface IOptions extends AxiosRequestConfig {
  mockURL?: string
}

class HTTP {
  private axios: AxiosInstance;
  private defaultConfig: AxiosRequestConfig;

  constructor(config: AxiosRequestConfig, options: IHTTPOptions = {}) {
    this.defaultConfig = {
      baseURL: config.baseURL,
      method: "GET",
      headers: {
        Accept: "application/json;charset=UTF-8",
        "Content-Type": "application/json;charset=UTF-8"
      }
    };
    const axiosInstance = axios.create(config);

    const requestInterceptors = options.requestInterceptors || defaultRequestInterceptors;
    const responseInterceptors = options.responseInterceptors || defaultResponseInterceptors;
    const errorInterceptors = options.errorInterceptors || defaultErrorInterceptors;

    axiosInstance.interceptors.request.use(
      requestInterceptors,
      errorInterceptors
    );
    axiosInstance.interceptors.response.use(
      responseInterceptors,
      (err: AxiosError) => {
        if (err.response) {
          responseInterceptors(err.response);
        } else if (err.request) {
          console.error(err.request);
        } else {
          console.error(err.message);
        }
      }
    );

    this.axios = axiosInstance;
  }

  public async send(options: IOptions): Promise<any> {
    const requestOptions = Object.assign({ mock: true }, this.defaultConfig, options);
    if (options.mockURL) {
      requestOptions.baseURL = options.mockURL;
    }
    const res = await this.axios(requestOptions);
    return (res && res.data) || null;
  }
}

export default HTTP;
