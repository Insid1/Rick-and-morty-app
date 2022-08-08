import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api/';
const REQUEST_TIMEOUT = 5000;

const createApi = (): AxiosInstance => {
  const api: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};

const api = createApi();

export { api };
export default createApi;
