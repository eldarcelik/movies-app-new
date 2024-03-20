import type { AxiosResponse } from 'axios';

import axiosInstance from '@/axiosInstance';

const getData = async <T>(url: string): Promise<AxiosResponse<T>> => axiosInstance.get<T>(url);

export default getData;
