import axios, { AxiosError } from 'axios';
import { AuthResponseInterface } from '../../pages/login/model/types/AuthResponseInterface.ts';

const $api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

$api.interceptors.request.use((config) => {
  if (localStorage.getItem('token')) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
  }
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (error.response?.status === 401) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      originalRequest._isRetry = true;
      try {
        const response = await axios.post<AuthResponseInterface>(
          `${import.meta.env.VITE_API_URL}/api/auth/refresh-token`,
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('refresh')}`
            }
          }
        );
        localStorage.setItem('token', response.data.access_token);
        localStorage.setItem('refresh', response.data.refresh_token);
        return $api.request(originalRequest!);
      } catch (e) {
        console.log('Not authorized');
      }
    }
    throw error;
  }
);

export default $api;
