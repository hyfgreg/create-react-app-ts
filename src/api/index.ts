import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import NProgress from 'nprogress';
import HTTP from 'utils/http';
import { END_POINT } from 'config';



// 请求拦截
const requestInterceptors = (config: AxiosRequestConfig) => {
  NProgress.start();
  // do something with config
  // return new config
  return config;
};
// 响应拦截
const responseInterceptors = (response: AxiosResponse) => {
  NProgress.done();
  const { status, statusText, data } = response;
  if (status !== 200) {
    console.error(statusText);
  }

  if (data.code && data.code !== 1) {
    console.error(data.message);
  }
  return response;
};
// 错误处理
const errorInterceptors = (error: AxiosError) => {
  console.error({ content: '服务器异常' });
  return Promise.reject(error);
};

export default new HTTP(
  { baseURL: END_POINT },
  {
    requestInterceptors,
    responseInterceptors,
    errorInterceptors,
  }
);

/**
 * Cancellation
 * https://github.com/axios/axios#cancellation
 */
