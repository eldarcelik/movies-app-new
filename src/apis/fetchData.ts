export const fetchData = (url: string) =>
  fetch(url).then((response) => {
    if (response.status === 200) return response.json();
    else throw new Error('Invalid response');
  });
