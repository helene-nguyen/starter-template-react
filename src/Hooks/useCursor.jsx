import { useState, useEffect } from 'react';

const useCursor = (initName, actionName, action) => {
  // -------------- Mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // console.log(mousePosition);
  // const [innerCursorAnimation, setCursorAnimation] = useState(initName);
  const [cursorAnimation, setCursorAnimation] = useState(initName);

  useEffect(() => {
    const mouseMove = (event) => {
      // console.log(event);
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', mouseMove);

    const moved = () => {
      window.addEventListener('mousemove', mouseMove);
    };

    return moved();
  }, []); // Only re-run the effect if something changes

  const variantsOuter = {
    default: {
      // center the cursor in the center of the div,depends on size defined in CSS ! ex : height & width 32px => substract 16px
      x: mousePosition.x - 17.25,
      y: mousePosition.y - 17.25,
      transition: { delay: Math.pow(10, -2) },
    },
    action: {
      ...action,
      x: mousePosition.x - 17.25,
      y: mousePosition.y - 17.25,
    },
  }; // always should be object

  const variantsInner = {
    default: {
      // center the cursor in the center of the div,depends on size defined in CSS ! ex : height & width 32px => substract 16px
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
    },
    action: {
      ...action,
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
    },
  }; // always should be object

  const setCursorOptions = {
    onMouseEnter: () => setCursorAnimation(actionName),
    onMouseLeave: () => setCursorAnimation(initName),
  };

  const cursorOptions = { variantsOuter, variantsInner, cursorAnimation };

  return [cursorOptions, setCursorOptions];
};

export { useCursor };
