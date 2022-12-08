import { useState, useEffect } from 'react';

const useCursor = () => { 
    
   // -------------- Mouse position
   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
   // console.log(mousePosition);
   const [cursorAnimation, setCursorAnimation] = useState('default');
 
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
       transition: { delay: Math.pow(5 * 10, -2) },
     },
   }; // always should be object
 
   const variantsInner = {
     default: {
       // center the cursor in the center of the div,depends on size defined in CSS ! ex : height & width 32px => substract 16px
       x: mousePosition.x - 8,
       y: mousePosition.y - 8,
     },
   }; // always should be object
 
    const setOptions = {
        onMouseEnter: () => setCursorAnimation('navEffect'),
        onMouseLeave : () => setCursorAnimation('default')
    };
    //TODO : check if it works properly when import custom hook
    const cursorOptions = { variantsOuter, variantsInner, cursorAnimation };
    return [cursorOptions, setOptions];
}

export { useCursor };