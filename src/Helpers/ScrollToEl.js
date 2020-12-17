const scrollToEl = (topPos) => {
  document.querySelector('main').scrollTo({
    left: 0,
    top: topPos,
    behavior: 'smooth',
  });
};

export default scrollToEl;
