const BASE_URL = 'https://60816d9073292b0017cdd833.mockapi.io/modes';

export function getInitialData<T>(): Promise<T> {
  return fetch(BASE_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json();
    })
    .catch((error) => {
      throw new Error(`Fetch error: ${error.message}`);
    });
};
