import { useState, useEffect } from 'react';

const useFetch = (apiUrl, method, bodyData, accessToken) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        // Object controller cancelled all pending promises operations
        const controller = new AbortController();
        const { signal } = controller;

        const options = {
          method: method,
          headers: { 'Content-type': 'application/x-www-form-urlencoded' },
          body: JSON.stringify(bodyData && null),
        };

        if (accessToken) options.headers['Authorization'] = `Bearer ${accessToken}`;

        const response = await fetch(apiUrl, options, { signal });
        const result = await response.json();

        if (!response.ok) {
          setIsLoading(false);
          throw new Error(`An error has occured : ${response.status}`);
        }

        setIsLoading(true);
        setData(result);

        // clean up
        return () => {
          // Cancel the fetch
          controller.abort();
        };
      } catch (error) {
        if (error.name === 'AbortError') console.error('Operation cancelled');
        console.error('Error :', error.message);
      }
    };

    fetchData();
  }, []);

  return [data, isLoading];
};

export { useFetch };
