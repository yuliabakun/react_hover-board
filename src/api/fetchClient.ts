const BASE_URL = process.env.REACT_APP_BASE_URL;

export function getInitialData<T>(): Promise<T> {
  if (!BASE_URL) {
    throw new Error('Base URL is not defined. Please check your environment variables.');
  }

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
