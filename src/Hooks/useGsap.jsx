import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';

const useGsap = (parent, tlName, className, options) => {
  const [reversed, setReversed] = useState(false);

  // store timeline in a ref.
  const tl = useRef();

  useLayoutEffect(() => { // wait for DOM rendered, animations will run AFTER once elements exist
    let ctx = gsap.context(() => {
      tl[tlName] = gsap.to(className, options);
    }, parent);

    return () => ctx.revert(); // clean up effect to avoid double useEffect call
  }, []); // <- empty dependency Array so it doesn't re-run on every render

  useEffect(() => {
    tl[tlName].reversed(reversed);
  }, [reversed]);

  const action = () => {
    return setReversed(!reversed);
  };

  return action;
};

export { useGsap };
