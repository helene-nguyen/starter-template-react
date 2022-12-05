import { useState } from 'react';

const useLocalStorage = (key, defaultValue) => {
  const getItem = () => {
    try {
      const value = localStorage.getItem(key);

      return value ? JSON.parse(value) : (localStorage.setItem(key, JSON.stringify(defaultValue)), defaultValue);
    } catch (error) {
      return defaultValue;
    }
  };

  const [storedValue, setStoredValue] = useState(getItem());

  const setValue = (newValue) => {
    try {
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.error(error);
    }
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
};

export { useLocalStorage };
