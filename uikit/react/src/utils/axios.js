// @third-party
import axios from 'axios';

// @project
import { AUTH_USER_KEY } from '@/config';

const axiosServices = axios.create({
  baseURL: 'https://ai.saasable.io/expose'
});

axiosServices.interceptors.request.use(
  async (config) => {
    const storedValue = typeof window !== 'undefined' ? localStorage.getItem(AUTH_USER_KEY) : null;
    const parsedValue = storedValue && JSON.parse(storedValue);

    if (parsedValue?.access_token) {
      config.headers['Authorization'] = `Bearer ${parsedValue.access_token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosServices.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const requestUrl = error.config?.url;
    const isLoginRequest = typeof requestUrl === 'string' && requestUrl.includes('/auth/login');

    if (status === 401 && typeof window !== 'undefined' && !isLoginRequest) {
      localStorage.removeItem(AUTH_USER_KEY);
    }
    const payload = error.response?.data;
    const rejection =
      payload && typeof payload === 'object'
        ? { ...payload, status }
        : {
            message: typeof payload === 'string' ? payload : 'Wrong Services',
            status
          };
    return Promise.reject(rejection);
  }
);

export default axiosServices;

export const axiosMockServices = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MOCK_API_URL || 'http://localhost:3010'
});

axiosMockServices.interceptors.request.use(
  async (config) => {
    const storedValue = typeof window !== 'undefined' ? localStorage.getItem(AUTH_USER_KEY) : null;
    const parsedValue = storedValue && JSON.parse(storedValue);

    if (parsedValue?.access_token) {
      config.headers['Authorization'] = `Bearer ${parsedValue.access_token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosMockServices.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const payload = error.response?.data;
    const rejection =
      payload && typeof payload === 'object'
        ? { ...payload, status }
        : {
            message: typeof payload === 'string' ? payload : 'Wrong Services',
            status
          };
    return Promise.reject(rejection);
  }
);
