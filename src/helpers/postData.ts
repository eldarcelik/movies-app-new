import handleResponse from './handleResponse';

const postData = async <T>(url: string, data: T): Promise<T> => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const responseData = await handleResponse<T>(response);

  return responseData;
};

export default postData;
