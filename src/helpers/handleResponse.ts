import { STATUS_CODES } from '@/constants/constantValues';

import convertKeysToCamelCase from './convertKeysToCamelCase';

const handleResponse = async <T>(response: Response): Promise<T> => {
  if (response.status === STATUS_CODES.OK) {
    const jsonResponse = await response.json();

    return convertKeysToCamelCase<T>(jsonResponse);
  } else {
    throw await response.json();
  }
};

export default handleResponse;
