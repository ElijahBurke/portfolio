import { useState, useEffect } from 'react';

const getSize = (width) => {
  let size = 'XLARGE';
  if (width < 750) size = 'SMALL';
  else if (width < 1100) size = 'MED';
  return size;
};

const ScreenSize = () => {
  const [screenSize, setScreenSize] = useState(getSize(window.innerWidth));

  useEffect(() => {
    const eventListenerFunc = () => {
      const { innerWidth } = window;
      setScreenSize(getSize(innerWidth));
    };

    window.addEventListener('resize', eventListenerFunc);
    return () => {
      window.removeEventListener('resize', eventListenerFunc);
    };
  }, []);

  return screenSize;
};

export default ScreenSize;
