import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const usePath = (path) => {
  let title;

  const location = useLocation().pathname;

  const getTitle = path.find((elem) => {
    const isGoodLocation = location.includes(elem.name.toLowerCase());
    if (isGoodLocation) return elem.name.toLowerCase();
  });
  const setTitle = (customTitle) => {
    return (title = customTitle);
  };
  getTitle !== undefined && (title = getTitle.name);

  return [title, setTitle];
};

export { usePath };
