const convertKeysToSnakeCase = <T>(data: T): T => {
  if (Array.isArray(data)) {
    return data.map((item) => convertKeysToSnakeCase(item) as unknown) as T;
  } else if (typeof data === 'object' && data !== null) {
    const newObj: Record<string, unknown> = {};

    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        const snakeCaseKey = key.replace(/[A-Z]/g, (match, offset) => (offset ? '_' : '') + match.toLowerCase());
        newObj[snakeCaseKey] = typeof data[key] === 'object' ? convertKeysToSnakeCase(data[key] as unknown) : data[key];
      }
    }

    return newObj as T;
  }

  return data;
};

export default convertKeysToSnakeCase;
