import gsap from 'gsap';

const skillsTL = () => {
  const tl = gsap.timeline({ paused: true });

  tl.to('.selfie_card_back', {
    width: '0%', duration: 0.5,
  });
  tl.to('.containers__right h1', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 0.8 }, '-=0.4');
  tl.to('.skills__title', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 0.8 }, '-=0.2');
  return tl;
};

export default skillsTL;
