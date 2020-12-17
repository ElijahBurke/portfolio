import { useState, useEffect } from 'react';

const InScroll = (ref, startsOnPage) => {
  const [isInScroll, setIsInScroll] = useState(startsOnPage);

  useEffect(() => {
    let checkScroll;
    if (ref.current) {
      const topPos = ref.current.getBoundingClientRect().y;
      checkScroll = () => {
        if (document.querySelector('main').scrollTop + window.innerHeight - 170 >= topPos) {
          setIsInScroll(true);
        } else setIsInScroll(false);
      };
      document.querySelector('main').addEventListener('scroll', checkScroll);
    }
    return () => {
      document.querySelector('main').removeEventListener('scroll', checkScroll);
    };
  }, [ref]);

  return isInScroll;
};

export default InScroll;
