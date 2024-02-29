import { STATUS_CODES } from '@/constants/constantValues';

import { convertKeysToCamelCase } from './';

const handleResponse = async <R>(response: Response): Promise<R> => {
  if (response.status === STATUS_CODES.OK) {
    const jsonResponse = await response.json();

    return convertKeysToCamelCase<R>(jsonResponse);
  } else if (response.status === STATUS_CODES.NO_CONTENT) {
    return null as R;
  } else {
    throw await response.json();
  }
};

export default handleResponse;
