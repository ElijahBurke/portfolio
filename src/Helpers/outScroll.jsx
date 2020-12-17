import { useState, useEffect } from 'react';

const OutScroll = (ref) => {
  const [isOutScroll, setIsOutScroll] = useState(false);

  useEffect(() => {
    let checkScroll;
    if (ref.current) {
      const topPos = ref.current.getBoundingClientRect().y;
      checkScroll = () => {
        if (document.querySelector('main').scrollTop >= topPos) {
          setIsOutScroll(true);
        } else setIsOutScroll(false);
      };

      document.querySelector('main').addEventListener('scroll', checkScroll);
    }
    return () => {
      document.querySelector('main').removeEventListener('scroll', checkScroll);
    };
  }, [ref]);

  return isOutScroll;
};

export default OutScroll;
