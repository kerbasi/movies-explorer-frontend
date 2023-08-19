import { useState, useEffect } from "react";

export const useMediaQuery = (size) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const query = `(min-width: ${size})`;
    const media = window.matchMedia(query);
    let inProcess = true
    const throttle = () => {
      if (inProcess) {
        clearTimeout(inProcess)
      }
      inProcess = setTimeout(listener, 100)
    }
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches)
      console.log('done');
    };
    window.addEventListener('resize', throttle);
    return () => window.removeEventListener('resize', throttle);
  }, [matches, size]);

  return matches;
};