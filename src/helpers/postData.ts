import type { AxiosResponse } from 'axios';

import axiosInstance from '@/axiosInstance';

const postData = async <T, D>(url: string, data: D): Promise<AxiosResponse<T, D>> =>
  axiosInstance.post<T, AxiosResponse<T, D>, D>(url, data);

export default postData;
