import { convertKeysToSnakeCase, handleResponse } from './';

const postData = async <T, R>(url: string, data: T): Promise<R> => {
  const accessToken = sessionStorage.getItem('accessToken');
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(convertKeysToSnakeCase(data)),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken ?? ''}`,
    },
  });

  return handleResponse<R>(response);
};

export default postData;
