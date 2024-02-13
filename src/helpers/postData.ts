import convertKeysToSnakeCase from './convertKeysToSnakeCase';
import handleResponse from './handleResponse';

const postData = async <T>(url: string, data: T): Promise<T> => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(convertKeysToSnakeCase(data)),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return handleResponse<T>(response);
};

export default postData;
