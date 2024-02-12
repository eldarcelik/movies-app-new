import handleResponse from './handleResponse';

const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);

  return handleResponse<T>(response);
};

export default getData;
