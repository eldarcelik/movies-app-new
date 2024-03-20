import { handleResponse } from './';

const getData = async <R>(url: string): Promise<R> => {
  const response = await fetch(url);

  return handleResponse<R>(response);
};

export default getData;
