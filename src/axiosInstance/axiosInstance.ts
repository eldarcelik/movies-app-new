import axios from 'axios';

import logout from '@/apis/logout';
import refreshAccessToken from '@/apis/refreshAccessToken';
import { MESSAGES, STATUS_CODES } from '@/constants/constantValues';
import { convertKeysToCamelCase, convertKeysToSnakeCase } from '@/helpers';

const axiosInstance = axios.create();
let retryRequest = false;

axiosInstance.interceptors.request.use(
  async (request) => {
    const expires = sessionStorage.getItem('expires');
    let accessToken = sessionStorage.getItem('accessToken');

    if (expires && Date.now() > parseInt(expires) && !retryRequest) {
      retryRequest = true;
      const {
        data: { data: newAuthData },
      } = await refreshAccessToken();

      if (newAuthData) {
        sessionStorage.setItem('accessToken', newAuthData.accessToken);
        sessionStorage.setItem('expires', (newAuthData.expires + Date.now()).toString());
        sessionStorage.setItem('refreshToken', newAuthData.refreshToken);
        accessToken = newAuthData.accessToken;
      } else {
        await logout();
        window.location.href = '/unauthorized';
        return Promise.reject(new Error(MESSAGES.REFRESH_TOKEN_FAILED));
      }

      retryRequest = false;
    }

    request.headers.Authorization = `Bearer ${accessToken || ''}`;
    request.headers['Content-Type'] = 'application/json';
    request.data = convertKeysToSnakeCase(request.data);

    return request;
  },
  async (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  async (response) => {
    if (response.status === STATUS_CODES.OK) {
      response.data = await convertKeysToCamelCase(response.data);
    }

    return response;
  },
  async (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
