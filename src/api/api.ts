import axios, {
  AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse,
} from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api/';
const REQUEST_TIMEOUT = 5000;

const createApi = (): AxiosInstance => {
  const api: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  // api.interceptors.response.use(
  //   (response: AxiosResponse): AxiosResponse => response,
  //   (error: AxiosError): AxiosError => error,
  // );

  // api.interceptors.request.use(
  //   (config: AxiosRequestConfig): AxiosRequestConfig => config,
  // );

  return api;
};

const api = createApi();

export { api };
export default createApi;
